
SELECT WAREHOUSE_ID	,WAREHOUSE_NAME	,ADDRESS, 
case when FREEZER_YN is NULL then 'N' else FREEZER_YN end as FREEZER_YN
FROM FOOD_WAREHOUSE
WHERE ADDRESS LIKE '%경기도%' 
order by WAREHOUSE_ID asc