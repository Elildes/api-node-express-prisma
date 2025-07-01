-- Garante que o esquema exista
CREATE SCHEMA IF NOT EXISTS "apiprismadb";

-- CreateTable
CREATE TABLE "apiprismadb"."usuario" (
    "id" SERIAL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "papel" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "apiprismadb"."usuario"("email");