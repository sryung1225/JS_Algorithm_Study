SELECT BOOK_ID, SUBSTRING(PUBLISHED_DATE, 1, 10) 
FROM BOOK
WHERE CATEGORY = '인문' AND PUBLISHED_DATE LIKE '2021%'
ORDER BY PUBLISHED_DATE ASC