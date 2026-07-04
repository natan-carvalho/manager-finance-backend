import { randomUUID } from "node:crypto";
import { PrismaClient } from "src/generated/prisma/client";

const permissions = [
  // Users
  'users.create',
  'users.read',
  'users.update',
  'users.delete',

  // Roles
  'roles.create',
  'roles.read',
  'roles.update',
  'roles.delete',

  // Permissions
  'permissions.create',
  'permissions.read',
  'permissions.update',
  'permissions.delete',
];

export async function seedPermissions(prisma: PrismaClient) {

  for (const permission of permissions) {
    const [resource, action] = permission.split('.');

    await prisma.permission.upsert({
      where: {
        name: permission,
      },
      update: {},
      create: {
        id: randomUUID(),
        name: permission,
        resource,
        action,
      },
    });
  }

  console.log('✅ Permissions');
}
