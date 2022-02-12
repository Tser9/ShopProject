--
-- Дамп данных таблицы `class_class`
--

INSERT INTO `class_class` (`class_name`) VALUES
('первый А'),
('Второй Б'),
('11 Фм');


-- --------------------------------------------------------
--
-- Дамп данных таблицы `user_people`
--

INSERT INTO `user_people` (`fio`, `isteacher`, `email`, `password`) VALUES
('Будиев Церен Баатрович', 2, 'asd@asd.asd', 'asd'),
('Антонов Атнон Атоновоич', 1, 'zxc@zxc.zxc', 'zxc'),
('Папвлов Павел Павлочивич', 1, 'ewq@eqw.eqw', 'eqw'),
('Егоров Егор Егорович', 0, 'dsa@dass.das', 'dsa'),
('Семенов Семне Семенович', 0, 'cxz@czx.czx', 'cxz'),
('Глебов Глеб Глебович', 0, 'rty@rty.rty', 'rty'),
('Аленовна Аkена Аленова', 0, 'ytr@ytr.ytr', 'ytr'),
('Виктория Викторовна Викторовнична', 0, 'fgh@fgh.dfgh', 'fgh'),
('Александра Алексанрдровна Александровичнга', 0, 'vbn@vbn.vbn', 'vbn'),
('Гончарук Даниил Дмитриевич', 2, 'qwe@qweqwe', 'qwe');

-- --------------------------------------------------------
--
-- Дамп данных таблицы `subject`
--

INSERT INTO `subject` (`subject_name`) VALUES
('Русский язык'),
('Английский язык'),
('География'),
('Математика');

-- --------------------------------------------------------
--
-- Дамп данных таблицы `lesson`
--

INSERT INTO `lesson` (`date`, `Class_id_class`, `Subject_id_subject`) VALUES
('2021-12-03', 1, 1),
('2021-12-06', 1, 1),
('2021-12-25', 1, 2),
('2021-12-10', 2, 4),
('2021-12-11', 2, 4),
('2021-12-26', 2, 3),
('2021-12-04', 2, 3),
('2021-12-10', 2, 3),
('2021-12-06', 2, 3),
('2021-12-31', 3, 1),
('2021-12-31', 3, 2),
('2021-12-14', 3, 2),
('2021-12-12', 3, 3),
('2021-12-02', 3, 4),
('2021-12-18', 3, 4);

-- --------------------------------------------------------
--
-- Дамп данных таблицы `marks`
--

INSERT INTO `marks` (`Lesson_id_lesson`, `User_id_user`, `mark`) VALUES
(9, 6, '3'),
(8, 5, '2'),
(7, 6, '5'),
(10, 8, '4'),
(11, 7, '5'),
(12, 8, '5'),
(14, 9, '5'),
(14, 7, '5'),
(15, 7, '4'),
(15, 9, '5'),
(4, 5, '3'),
(3, 4, '5'),
(2, 4, '5'),
(1, 4, '5');

-- --------------------------------------------------------
--
-- Дамп данных таблицы `user_has_class`
--

INSERT INTO `user_has_class` (`User_id_user`, `Class_id_class`) VALUES
(3, 1),
(4, 1),
(2, 2),
(5, 2),
(6, 2),
(2, 3),
(3, 3),
(7, 3),
(8, 3),
(9, 3);

-- --------------------------------------------------------
--
-- Дамп данных таблицы `user_has_subject`
--

INSERT INTO `user_has_subject` (`User_id_user`, `Subject_id_subject`) VALUES
(2, 3),
(2, 4),
(3, 1),
(3, 2),
(4, 1),
(4, 2),
(5, 4),
(5, 3),
(6, 4),
(6, 3),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(9, 1),
(9, 2),
(9, 3),
(9, 4);