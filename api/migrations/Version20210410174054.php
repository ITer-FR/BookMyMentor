<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210410174054 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE greeting_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE duration_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE format_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE mentor_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE soft_skill_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE stack_tech_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE target_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "user_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE duration (id INT NOT NULL, time VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE format (id INT NOT NULL, name VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE mentor (id INT NOT NULL, why_help TEXT DEFAULT NULL, why_mentor TEXT DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE mentor_soft_skill (mentor_id INT NOT NULL, soft_skill_id INT NOT NULL, PRIMARY KEY(mentor_id, soft_skill_id))');
        $this->addSql('CREATE INDEX IDX_485689B8DB403044 ON mentor_soft_skill (mentor_id)');
        $this->addSql('CREATE INDEX IDX_485689B888034CA4 ON mentor_soft_skill (soft_skill_id)');
        $this->addSql('CREATE TABLE mentor_stack_tech (mentor_id INT NOT NULL, stack_tech_id INT NOT NULL, PRIMARY KEY(mentor_id, stack_tech_id))');
        $this->addSql('CREATE INDEX IDX_D4301F88DB403044 ON mentor_stack_tech (mentor_id)');
        $this->addSql('CREATE INDEX IDX_D4301F882FA24059 ON mentor_stack_tech (stack_tech_id)');
        $this->addSql('CREATE TABLE mentor_duration (mentor_id INT NOT NULL, duration_id INT NOT NULL, PRIMARY KEY(mentor_id, duration_id))');
        $this->addSql('CREATE INDEX IDX_CDC25F7CDB403044 ON mentor_duration (mentor_id)');
        $this->addSql('CREATE INDEX IDX_CDC25F7C37B987D8 ON mentor_duration (duration_id)');
        $this->addSql('CREATE TABLE mentor_target (mentor_id INT NOT NULL, target_id INT NOT NULL, PRIMARY KEY(mentor_id, target_id))');
        $this->addSql('CREATE INDEX IDX_44C5B0FFDB403044 ON mentor_target (mentor_id)');
        $this->addSql('CREATE INDEX IDX_44C5B0FF158E0B66 ON mentor_target (target_id)');
        $this->addSql('CREATE TABLE mentor_format (mentor_id INT NOT NULL, format_id INT NOT NULL, PRIMARY KEY(mentor_id, format_id))');
        $this->addSql('CREATE INDEX IDX_DC10EDDCDB403044 ON mentor_format (mentor_id)');
        $this->addSql('CREATE INDEX IDX_DC10EDDCD629F605 ON mentor_format (format_id)');
        $this->addSql('CREATE TABLE soft_skill (id INT NOT NULL, name VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE stack_tech (id INT NOT NULL, name VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE target (id INT NOT NULL, name VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE "user" (id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, phone INT DEFAULT NULL, github VARCHAR(255) NOT NULL, linkedin VARCHAR(255) DEFAULT NULL, portfolio VARCHAR(512) DEFAULT NULL, bio TEXT DEFAULT NULL, avatar VARCHAR(512) DEFAULT NULL, route TEXT DEFAULT NULL, open_social BOOLEAN NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
        $this->addSql('ALTER TABLE mentor_soft_skill ADD CONSTRAINT FK_485689B8DB403044 FOREIGN KEY (mentor_id) REFERENCES mentor (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mentor_soft_skill ADD CONSTRAINT FK_485689B888034CA4 FOREIGN KEY (soft_skill_id) REFERENCES soft_skill (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mentor_stack_tech ADD CONSTRAINT FK_D4301F88DB403044 FOREIGN KEY (mentor_id) REFERENCES mentor (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mentor_stack_tech ADD CONSTRAINT FK_D4301F882FA24059 FOREIGN KEY (stack_tech_id) REFERENCES stack_tech (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mentor_duration ADD CONSTRAINT FK_CDC25F7CDB403044 FOREIGN KEY (mentor_id) REFERENCES mentor (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mentor_duration ADD CONSTRAINT FK_CDC25F7C37B987D8 FOREIGN KEY (duration_id) REFERENCES duration (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mentor_target ADD CONSTRAINT FK_44C5B0FFDB403044 FOREIGN KEY (mentor_id) REFERENCES mentor (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mentor_target ADD CONSTRAINT FK_44C5B0FF158E0B66 FOREIGN KEY (target_id) REFERENCES target (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mentor_format ADD CONSTRAINT FK_DC10EDDCDB403044 FOREIGN KEY (mentor_id) REFERENCES mentor (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mentor_format ADD CONSTRAINT FK_DC10EDDCD629F605 FOREIGN KEY (format_id) REFERENCES format (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE greeting');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE mentor_duration DROP CONSTRAINT FK_CDC25F7C37B987D8');
        $this->addSql('ALTER TABLE mentor_format DROP CONSTRAINT FK_DC10EDDCD629F605');
        $this->addSql('ALTER TABLE mentor_soft_skill DROP CONSTRAINT FK_485689B8DB403044');
        $this->addSql('ALTER TABLE mentor_stack_tech DROP CONSTRAINT FK_D4301F88DB403044');
        $this->addSql('ALTER TABLE mentor_duration DROP CONSTRAINT FK_CDC25F7CDB403044');
        $this->addSql('ALTER TABLE mentor_target DROP CONSTRAINT FK_44C5B0FFDB403044');
        $this->addSql('ALTER TABLE mentor_format DROP CONSTRAINT FK_DC10EDDCDB403044');
        $this->addSql('ALTER TABLE mentor_soft_skill DROP CONSTRAINT FK_485689B888034CA4');
        $this->addSql('ALTER TABLE mentor_stack_tech DROP CONSTRAINT FK_D4301F882FA24059');
        $this->addSql('ALTER TABLE mentor_target DROP CONSTRAINT FK_44C5B0FF158E0B66');
        $this->addSql('DROP SEQUENCE duration_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE format_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE mentor_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE soft_skill_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE stack_tech_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE target_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "user_id_seq" CASCADE');
        $this->addSql('CREATE SEQUENCE greeting_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE greeting (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('DROP TABLE duration');
        $this->addSql('DROP TABLE format');
        $this->addSql('DROP TABLE mentor');
        $this->addSql('DROP TABLE mentor_soft_skill');
        $this->addSql('DROP TABLE mentor_stack_tech');
        $this->addSql('DROP TABLE mentor_duration');
        $this->addSql('DROP TABLE mentor_target');
        $this->addSql('DROP TABLE mentor_format');
        $this->addSql('DROP TABLE soft_skill');
        $this->addSql('DROP TABLE stack_tech');
        $this->addSql('DROP TABLE target');
        $this->addSql('DROP TABLE "user"');
    }
}
