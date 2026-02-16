---
layout: none
---

<nav class="sidebar">

## Navigation

- [Startseite](index.md)
- [Vorwort](Vorwort.md)
- [Einleitung](Einleitung.md)
- [Manifest](Manifest.md)
- [Grundprinzipien](Grundprinzipien.md)
- [Historie](Historie.md)
- [Modell](Modell.md)
- [Übersicht](uebersicht.md)

---

## Kapitel

{% assign chapters = site.pages | sort: "title" %}
{% for page in chapters %}
  {% if page.title contains "Kapitel" %}
- [{{ page.title }}]({{ page.url | relative_url }})
  {% endif %}
{% endfor %}

---

## Abschluss

- [Schlussseite](Schlussseite.md)

</nav>