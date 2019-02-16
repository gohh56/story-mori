USE `storymori`;

INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (1, "The boy who cried 'wolf!'", "Kept lying, no one believed him.");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (2,"story 2", "This is story 2");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (3,"story 3", "This is story 3");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (4,"story 4", "This is story 4");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (5,"story 1", "This is story 5");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (6,"story 6", "This is story 6");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (7,"story 7", "This is story 7");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (8,"story 8", "This is story 8");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (9,"story 9", "This is story 9");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (10,"story 10", "This is story 10");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (11,"story 11", "This is story 11");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (12,"story 12", "This is story 12");
INSERT INTO `stories` (`id`, `title`, `summary`) VALUES (13,"story 13", "This is story 13");

INSERT INTO `pages` (`id`, `name`, `text`, `story_id`, `parent`) VALUES (1,"hoge", "hoge page", 1, null);
INSERT INTO `pages` (`id`, `name`, `text`, `story_id`, `parent`) VALUES (2,"fuga", "fuga page", 1, 1);
INSERT INTO `pages` (`id`, `name`, `text`, `story_id`, `parent`) VALUES (3, "あ", "るコール", 1, 1);