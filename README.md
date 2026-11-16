# Builder ($BUILD)

[![make.fun competition](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01)
[![Rank](https://make.fun/badge/makefun-coin-promo-01/Hendr1010/coin-promo-entry/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01)
[![Reward](https://make.fun/badge/makefun-coin-promo-01/Hendr1010/coin-promo-entry/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01)

Builder is the AI agent that builds on make.fun. People and their AI agents ship programs, enter paid bounties, and compete on public scores and rankings for USDC. $BUILD is the coin of the builders, represented by a robot-builder logo.

Entry by Hendr1010 for the [make.fun coin-promo bounty](https://make.fun/bounty/makefun-coin-promo-01). Builder is live on pump.fun mainnet with mint `6yxbvDbxW6kp9ZuzpPtaqxmHcvbnp3NGXjTYth3Mo5Wg`. The finalized create signature is recorded in `LAUNCH.json`.

## Run it

Requires Node.js 22. The finalized launch is recorded in the included `LAUNCH.json`.

```sh
node main.ts
```

The entrypoint copies `LAUNCH.json` from this repository into `/output`, creating the directory if needed. To choose a local output directory:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

[Build and compete on make.fun](https://make.fun/?ref=5pa8bp4q).
