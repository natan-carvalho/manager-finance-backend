// import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { seedRoles } from './seeds/role.seed';
import { seedPermissions } from './seeds/permissions.seed';
import { randomUUID } from 'node:crypto';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from 'src/generated/prisma/client';

const adapter = new PrismaBetterSqlite3({ url: process.env["DATABASE_URL"] });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding...');

  /*
   * Permissions
   */
  await seedPermissions(prisma);

  /*
   * Roles
   */
  const { adminRole, managerRole, userRole } = await seedRoles(prisma);

  /*
   * Buscar permissões
   */
  const allPermissions = await prisma.permission.findMany();

  /*
   * ADMIN
   * Todas as permissões
   */
  for (const permission of allPermissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: adminRole.id,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId: adminRole.id,
        permissionId: permission.id,
      },
    });
  }

  /*
   * MANAGER
   */
  const managerPermissions = allPermissions.filter((permission) =>
    [
      'users.read',
      'users.update',

      'roles.read',

      'permissions.read',
    ].includes(permission.name),
  );

  for (const permission of managerPermissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: managerRole.id,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId: managerRole.id,
        permissionId: permission.id,
      },
    });
  }

  /*
   * USER
   */
  const userPermissions = allPermissions.filter((permission) =>
    [
      'users.read',
    ].includes(permission.name),
  );

  for (const permission of userPermissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: userRole.id,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId: userRole.id,
        permissionId: permission.id,
      },
    });
  }

  console.log('✅ Role Permissions');

  /*
   * Admin User
   */
  const password = await bcrypt.hash('Admin@123', 12);

  const admin = await prisma.user.upsert({
    where: {
      email: 'admin@finance.com',
    },
    update: {},
    create: {
      id: randomUUID(),
      name: 'Administrador',
      email: 'admin@finance.com',
      password,
      emailVerified: true,
    },
  });

  /*
   * Vincular ADMIN ao usuário
   */
  await prisma.userRole.upsert({
    where: {
      userId_roleId: {
        userId: admin.id,
        roleId: adminRole.id,
      },
    },
    update: {},
    create: {
      userId: admin.id,
      roleId: adminRole.id,
    },
  });

  console.log('✅ Admin User');

  console.log('🎉 Seed finalizado.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });