import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTblShippingIdColumn1729621340071 implements MigrationInterface {
    name = 'ChangeTblShippingIdColumn1729621340071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_cc4e4adab232e8c05026b2f345d"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "shippings_id_seq" OWNED BY "shippings"."id"`);
        await queryRunner.query(`ALTER TABLE "shippings" ALTER COLUMN "id" SET DEFAULT nextval('"shippings_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_cc4e4adab232e8c05026b2f345d" FOREIGN KEY ("shippingAddressId") REFERENCES "shippings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_cc4e4adab232e8c05026b2f345d"`);
        await queryRunner.query(`ALTER TABLE "shippings" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "shippings_id_seq"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_cc4e4adab232e8c05026b2f345d" FOREIGN KEY ("shippingAddressId") REFERENCES "shippings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
