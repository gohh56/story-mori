DROP DATABASE IF EXISTS `storymori`;
CREATE DATABASE `storymori` DEFAULT CHARACTER SET utf8mb4;

USE `storymori`;

CREATE TABLE `stories` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `title` TEXT,
  `summary` TEXT,
  `created_by` BIGINT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_by` BIGINT,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,    
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `pages` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` TEXT,
  `text` TEXT,
  `story_id` BIGINT NOT NULL,
  `parent_id` BIGINT,
  `created_by` BIGINT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_by` BIGINT,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  PRIMARY KEY (`id`),
  FOREIGN KEY (`story_id`) REFERENCES stories(`id`),
  FOREIGN KEY (`parent_id`) REFERENCES pages(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;