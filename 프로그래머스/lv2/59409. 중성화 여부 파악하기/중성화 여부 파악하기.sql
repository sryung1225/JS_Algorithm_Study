SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE SEX_UPON_INTAKE IN ("Neutered", "Spayed") as "O" OR "X"
ORDER BY ANIMAL_ID ASC;