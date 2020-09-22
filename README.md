# Classis-filter

- Filtr produktů po načtení Ajax se filtr automaticky schová - je potřeba aby zůstaval defaultně bud otevřený nebo zavřený. (Uchování informace do LocalStorage?)

- Filtr produktů, při vyfiltrování jen podle ceny se zobrazí „Smazat všechny filtry“  v pozadí filtrů (Tohle je spíše pro CSS)

- Filtr produktů - pokud LocalStorage je při prvním zobrazení filtru prázdné, -> tak hází chyba (:nth-child)
(Tato chyba je aktuálně vyřešená tím, že se zobrazí defaultně :nth-child(1) - což je nepraktické, stejně jak bod 1)
