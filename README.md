# WIST

Joc de Wist în 4 jucători, contra calculatorului, cu tabelă de scor integrată pentru jocul cu cărți reale. Rulează direct în browser, fără instalare.

**▶️ [Joacă acum](https://remusretezan-pixel.github.io/WIST/)**

## Ce conține

- **index.html** (`wist_tel.html`) — versiunea pentru telefon, care merge și pe calculator. Se poate adăuga pe ecranul principal, rulează pe tot ecranul, orientată landscape, și funcționează offline.
- **wist.html** — versiunea pentru calculator. Meniu cu două moduri: *Joacă* (contra a 3 jucători virtuali) și *Tabelă de scor* (pentru jocul cu cărți reale).
- **sw.js** — service worker pentru funcționarea offline.

## Cum se joacă

60 de runde (de la 1 la 8 cărți și înapoi la 1), pachet de 32 de cărți. Fiecare jucător licitează câte levate crede că va face; cel care împarte licitează ultimul, cu restricția ca suma licitațiilor să fie diferită de numărul de cărți.

**Punctaj:** licitat = făcut → făcute + 5 puncte. Altfel → minus diferența dintre licitat și făcut.

## Adversarii virtuali

Fiecare bot are **trei niveluri de dificultate** (ușor / mediu / greu) și **trei tipologii de licitație** (rezervat / echilibrat / agresiv), combinabile
