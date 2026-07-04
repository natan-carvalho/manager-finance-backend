import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";

type SeedRolesReturnType = {
  adminRole: { id: string };
  managerRole: { id: string };
  userRole: { id: string };
};

export async function seedRoles(prisma: PrismaClient): Promise<SeedRolesReturnType> {
  const adminRole = await prisma.role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: {
      id: randomUUID(),
      name: 'ADMIN',
      description: 'Administrador do sistema',
    },
  });

  const managerRole = await prisma.role.upsert({
    where: { name: 'MANAGER' },
    update: {},
    create: {
      id: randomUUID(),
      name: 'MANAGER',
      description: 'Gerente',
    },
  });

  const userRole = await prisma.role.upsert({
    where: { name: 'USER' },
    update: {},
    create: {
      id: randomUUID(),
      name: 'USER',
      description: 'Usuário padrão',
    },
  });

  console.log('✅ Roles');

  return { adminRole, managerRole, userRole };
}
