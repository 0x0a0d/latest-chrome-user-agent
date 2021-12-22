import { latestChromeVersion } from 'latest-chrome-version'

export type win_or_mac = 'win' | 'mac'

export async function latestChromeUserAgent(platform?: win_or_mac): Promise<string> {
  const version = await latestChromeVersion(platform)
  if (platform === 'mac') {
    return `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version} Safari/537.36`
  } else {
    return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version} Safari/537.36`
  }
}
