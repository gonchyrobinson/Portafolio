# Project Screenshots & Demo Videos

Drop your media files in the corresponding project folder:

```
projects/
├── pasantias/
│   ├── screenshot-1.png    (required: main thumbnail)
│   ├── screenshot-2.png    (optional: additional screenshots)
│   └── demo.mp4            (optional: video demo)
├── blue-cheetah/
│   ├── screenshot-1.png
│   └── demo.mp4
└── restaurantes/
    ├── screenshot-1.png
    └── demo.mp4
```

## How to add media

1. Take screenshots of your project (recommended: 1280x720 or 1920x1080)
2. Name them `screenshot-1.png`, `screenshot-2.png`, etc.
3. Place them in the corresponding folder above
4. For video demos, record with OBS Studio or Loom and save as `demo.mp4`
5. Update `src/data/projects.ts` to reference the files

## Using external video URLs

Instead of local .mp4 files, you can use YouTube or Loom URLs in `projects.ts`:

```typescript
demoVideo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
// or
demoVideo: "https://www.loom.com/share/YOUR_LOOM_ID",
```

The modal will automatically detect the URL type and embed it correctly.
