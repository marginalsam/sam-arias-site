# Image Assets — Replacement Guide

This folder contains all images used by the site. Every image currently has a
coded placeholder (colored div or CSS illustration). Replace each file below
with the real asset and the site will automatically use it.

---

## Root / About Page

| Filename | Used In | Description |
|---|---|---|
| `nyc-skyline.jpg` | `app/page.js` — Footer | NYC skyline panorama. Displayed as a full-width banner at the bottom of the About page. Recommended size: 1600×400px. |

---

## Film Page (`/film`)

Place film photography assets inside a `film/` subfolder:

```
public/
  assets/
    film/
      hero-car-night.jpg     ← Full-bleed hero image. Car at night with
                               film grain look. Recommended: 1920×1080px.
      photo_01.jpg           ← Gallery photo 1
      photo_02.jpg           ← Gallery photo 2
      photo_03.jpg           ← Gallery photo 3
      photo_04.jpg           ← Gallery photo 4
      photo_05.jpg           ← Gallery photo 5
      photo_06.jpg           ← Gallery photo 6
      photo_07.jpg           ← Gallery photo 7
      photo_08.jpg           ← Gallery photo 8
      photo_09.jpg           ← Gallery photo 9
      photo_10.jpg           ← Gallery photo 10
      photo_11.jpg           ← Gallery photo 11
      photo_12.jpg           ← Gallery photo 12
```

After adding photos, update `app/film/page.js`:
1. Import `Image` from `"next/image"` at the top.
2. In `PhotoCard`, replace the `<figure>` placeholder with:
   ```jsx
   <Image
     src={`/assets/film/photo_${String(index + 1).padStart(2, '0')}.jpg`}
     alt={`Film photo ${index + 1}`}
     fill
     className="object-cover"
   />
   ```

---

## P.H.0 Page (`/ph0`)

Place band assets inside a `ph0/` subfolder:

```
public/
  assets/
    ph0/
      hero-bg.jpg            ← Hero background image (band photo or art).
                               Recommended: 1920×1080px, dark tones.
      band-photo.jpg         ← Band group photo for the About section.
                               Recommended: 800×600px.
      album-01.jpg           ← Artwork for release 1
      album-02.jpg           ← Artwork for release 2
      album-03.jpg           ← Artwork for release 3
```

---

## Resume

Place the resume PDF at:
```
public/
  assets/
    sam-arias-resume.pdf
```

The Nav already links to `/assets/sam-arias-resume.pdf` — just drop the file here
and the link becomes live.

---

## General Notes

- Use `.jpg` for photos, `.png` for logos/icons with transparency.
- Optimize images before adding them (tools: Squoosh, ImageOptim, or `sharp` CLI).
- Next.js `<Image>` handles resizing automatically for the formats listed above.
- The `film-grain` CSS overlay in `globals.css` adds texture on top of images —
  no need to bake grain into the hero photo (though it does look great if you do).
