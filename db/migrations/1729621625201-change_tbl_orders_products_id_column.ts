import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTblOrdersProductsIdColumn1729621625201 implements MigrationInterface {
    name = 'ChangeTblOrdersProductsIdColumn1729621625201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "orders_products_id_seq" OWNED BY "orders_products"."id"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ALTER COLUMN "id" SET DEFAULT nextval('"orders_products_id_seq"')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders_products" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "orders_products_id_seq"`);
    }

}
