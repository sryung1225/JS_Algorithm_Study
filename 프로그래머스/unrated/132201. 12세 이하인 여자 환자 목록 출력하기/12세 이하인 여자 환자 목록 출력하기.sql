SELECT PT_NAME, PT_NO, GEND_CD, AGE, COALESCE(TLNO, "NONE") as TLNO
FROM PATIENT
WHERE AGE <= 12 && GEND_CD = "W"
ORDER BY AGE DESC, PT_NAME ASC