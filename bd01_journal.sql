-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 01 2022 г., 01:40
-- Версия сервера: 8.0.24
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `bd01`
--

-- --------------------------------------------------------

--
-- Структура таблицы `class_class`
--

CREATE TABLE `class_class` (
  `id_class` int UNSIGNED NOT NULL,
  `class_name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `lesson`
--

CREATE TABLE `lesson` (
  `id_lesson` int UNSIGNED NOT NULL,
  `date` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `Class_id_class` int UNSIGNED NOT NULL,
  `Subject_id_subject` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `marks`
--

CREATE TABLE `marks` (
  `id_mark` int UNSIGNED NOT NULL,
  `Lesson_id_lesson` int UNSIGNED NOT NULL,
  `User_id_user` int UNSIGNED NOT NULL,
  `mark` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `subject`
--

CREATE TABLE `subject` (
  `id_subject` int UNSIGNED NOT NULL,
  `subject_name` text CHARACTER SET utf8 COLLATE utf8_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `user_has_class`
--

CREATE TABLE `user_has_class` (
  `id_user_has_class` INT UNSIGNED NOT NULL,
  `User_id_user` int UNSIGNED NOT NULL,
  `Class_id_class` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `user_has_subject`
--

CREATE TABLE `user_has_subject` (
  `id_user_has_subject` INT UNSIGNED NOT NULL,
  `User_id_user` int UNSIGNED NOT NULL,
  `Subject_id_subject` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `user_people`
--

CREATE TABLE `user_people` (
  `id_user` int UNSIGNED NOT NULL,
  `fio` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `isteacher` tinyint(1) DEFAULT NULL,
  `email` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `password` text CHARACTER SET utf8 COLLATE utf8_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `class_class`
--
ALTER TABLE `class_class`
  ADD PRIMARY KEY (`id_class`);

--
-- Индексы таблицы `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`id_lesson`),
  ADD KEY `Class_id_class` (`Class_id_class`),
  ADD KEY `Subject_id_subject` (`Subject_id_subject`);

--
-- Индексы таблицы `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`id_mark`),
  ADD KEY `Lesson_id_lesson` (`Lesson_id_lesson`),
  ADD KEY `User_id_user` (`User_id_user`);

--
-- Индексы таблицы `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id_subject`);

--
-- Индексы таблицы `user_has_class`
--
ALTER TABLE `user_has_class`
  ADD PRIMARY KEY (`id_user_has_class`),
  ADD KEY `Class_id_class` (`Class_id_class`),
  ADD KEY `User_id_user` (`User_id_user`);

--
-- Индексы таблицы `user_has_subject`
--
ALTER TABLE `user_has_subject`
  ADD PRIMARY KEY (`id_user_has_subject`),
  ADD KEY `Subject_id_subject` (`Subject_id_subject`),
  ADD KEY `User_id_user` (`User_id_user`);

--
-- Индексы таблицы `user_people`
--
ALTER TABLE `user_people`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `class_class`
--
ALTER TABLE `class_class`
  MODIFY `id_class` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `lesson`
--
ALTER TABLE `lesson`
  MODIFY `id_lesson` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `marks`
--
ALTER TABLE `marks`
  MODIFY `id_mark` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `subject`
--
ALTER TABLE `subject`
  MODIFY `id_subject` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `user_people`
--
ALTER TABLE `user_people`
  MODIFY `id_user` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `user_has_subject`
--
ALTER TABLE `user_has_subject`
  MODIFY `id_user_has_subject` int UNSIGNED NOT NULL AUTO_INCREMENT;
  
--
-- AUTO_INCREMENT для таблицы `user_has_subject`
--
ALTER TABLE `user_has_class`
  MODIFY `id_user_has_class` int UNSIGNED NOT NULL AUTO_INCREMENT;
  
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `lesson`
--
ALTER TABLE `lesson`
  ADD CONSTRAINT `lesson_ibfk_1` FOREIGN KEY (`Class_id_class`) REFERENCES `class_class` (`id_class`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lesson_ibfk_2` FOREIGN KEY (`Subject_id_subject`) REFERENCES `subject` (`id_subject`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `marks`
--
ALTER TABLE `marks`
  ADD CONSTRAINT `marks_ibfk_1` FOREIGN KEY (`Lesson_id_lesson`) REFERENCES `lesson` (`id_lesson`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `marks_ibfk_2` FOREIGN KEY (`User_id_user`) REFERENCES `user_people` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `user_has_class`
--
ALTER TABLE `user_has_class`
  ADD CONSTRAINT `user_has_class_ibfk_1` FOREIGN KEY (`Class_id_class`) REFERENCES `class_class` (`id_class`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_has_class_ibfk_2` FOREIGN KEY (`User_id_user`) REFERENCES `user_people` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `user_has_subject`
--
ALTER TABLE `user_has_subject`
  ADD CONSTRAINT `user_has_subject_ibfk_1` FOREIGN KEY (`Subject_id_subject`) REFERENCES `subject` (`id_subject`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_has_subject_ibfk_2` FOREIGN KEY (`User_id_user`) REFERENCES `user_people` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
