#Get latest Chrome UserAgent

```typescript
import { latestChromeUserAgent } from 'latest-chrome-user-agent'

latestChromeUserAgent().then((userAgent) => {
  console.log(userAgent)
})
```

* latestChromeUserAgent(platform: 'win'|'mac') => string
