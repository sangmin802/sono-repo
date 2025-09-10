# SONO-REPO
## lostark-hands-next
유저 정보제공 사이트
.
├── app
│   ├── @component
│   │   ├── _types.ts
│   │   ├── _utils.ts
│   │   ├── daily-content
│   │   │   ├── card.tsx
│   │   │   ├── index.tsx
│   │   │   ├── section.tsx
│   │   │   └── skeleton.tsx
│   │   ├── event
│   │   │   ├── index.tsx
│   │   │   └── skeleton.tsx
│   │   ├── header.tsx
│   │   ├── notice
│   │   │   ├── index.tsx
│   │   │   └── skeleton.tsx
│   │   ├── notification-button.tsx
│   │   ├── procyon-compass
│   │   │   ├── card.tsx
│   │   │   ├── index.tsx
│   │   │   ├── section.tsx
│   │   │   └── skeleton.tsx
│   │   └── time-unit.tsx
│   ├── error.tsx
│   ├── head.tsx
│   ├── layout.tsx
│   ├── manifest.json
│   ├── markets
│   │   ├── @component
│   │   │   ├── goods-list
│   │   │   │   ├── card.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── price-label.tsx
│   │   │   │   └── skeleton.tsx
│   │   │   ├── index.tsx
│   │   │   └── use-markets-filter.ts
│   │   └── page.tsx
│   ├── page.tsx
│   ├── server-wrapper.tsx
│   ├── sitemap.ts
│   └── user-info
│       ├── [name]
│       │   ├── @component
│       │   │   ├── ark-passive
│       │   │   │   ├── _constants.ts
│       │   │   │   ├── ark-passive-collapse.tsx
│       │   │   │   ├── content-grid.tsx
│       │   │   │   ├── index.ts
│       │   │   │   └── skeleton.tsx
│       │   │   ├── card-set
│       │   │   │   ├── index.tsx
│       │   │   │   ├── item.tsx
│       │   │   │   └── skeleton.tsx
│       │   │   ├── combat-skill
│       │   │   │   ├── _types.ts
│       │   │   │   ├── _utils.ts
│       │   │   │   ├── card.tsx
│       │   │   │   ├── index.tsx
│       │   │   │   └── skeleton.tsx
│       │   │   ├── engrave
│       │   │   │   ├── _constants.ts
│       │   │   │   ├── ark-passive-engrave.tsx
│       │   │   │   ├── common-engrave.tsx
│       │   │   │   ├── engrave-collapse.tsx
│       │   │   │   ├── index.ts
│       │   │   │   └── skeleton.tsx
│       │   │   ├── equipment
│       │   │   │   ├── _constants.ts
│       │   │   │   ├── _types.ts
│       │   │   │   ├── acc-card.tsx
│       │   │   │   ├── armory-card.tsx
│       │   │   │   ├── elixir.tsx
│       │   │   │   ├── index.tsx
│       │   │   │   ├── skeleton.tsx
│       │   │   │   └── transcedence.tsx
│       │   │   ├── gem
│       │   │   │   ├── _utils.ts
│       │   │   │   ├── index.tsx
│       │   │   │   └── skeleton.tsx
│       │   │   ├── profile
│       │   │   │   ├── _constants.ts
│       │   │   │   ├── index.tsx
│       │   │   │   ├── level-info.tsx
│       │   │   │   └── skeleton.tsx
│       │   │   ├── quality-chip.tsx
│       │   │   ├── stats
│       │   │   │   ├── index.tsx
│       │   │   │   └── skeleton.tsx
│       │   │   ├── tab-list.tsx
│       │   │   └── tendencies
│       │   │       ├── index.tsx
│       │   │       └── skeleton.tsx
│       │   ├── avatar
│       │   │   ├── @component
│       │   │   │   ├── index.tsx
│       │   │   │   └── skeleton.tsx
│       │   │   └── page.tsx
│       │   ├── collection
│       │   │   ├── @component
│       │   │   │   ├── _constants.ts
│       │   │   │   ├── index.tsx
│       │   │   │   ├── medal
│       │   │   │   │   ├── index.tsx
│       │   │   │   │   └── skeleton.tsx
│       │   │   │   └── skeleton.tsx
│       │   │   └── page.tsx
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   └── silblings
│       │       ├── @component
│       │       │   ├── index.tsx
│       │       │   ├── silbling-list.tsx
│       │       │   └── skeleton.tsx
│       │       └── page.tsx
│       └── error.tsx
├── client-component
│   ├── armory-tooltip.tsx
│   ├── dangerous-html.tsx
│   ├── data-empty-funnel.tsx
│   ├── grade-text.tsx
│   ├── indent-string-group.tsx
│   ├── infinite-list.tsx
│   ├── item-part-box.tsx
│   ├── label-layout
│   │   ├── index.tsx
│   │   └── skeleton.tsx
│   ├── label.tsx
│   ├── message-post
│   │   ├── index.tsx
│   │   └── skeleton.tsx
│   ├── modal
│   │   ├── armory-tooltip-list-modal.tsx
│   │   ├── armory-tooltip-modal.tsx
│   │   ├── client-modal-root.tsx
│   │   ├── desc-list-modal.tsx
│   │   ├── filter-modal
│   │   │   ├── category-filter.tsx
│   │   │   ├── index.tsx
│   │   │   ├── keyword-filter.tsx
│   │   │   ├── search-filter.tsx
│   │   │   └── types.ts
│   │   └── item-list-modal.tsx
│   ├── reward-icon.tsx
│   ├── skeleton.tsx
│   ├── sticky-element
│   │   ├── index.tsx
│   │   └── skeleton.tsx
│   ├── thumbnail-card
│   │   ├── index.tsx
│   │   └── skeleton.tsx
│   ├── thumbnail-post
│   │   ├── index.tsx
│   │   └── skeleton.tsx
│   ├── thumbnail.tsx
│   └── tripod-skill-custom.tsx
├── constants
│   └── index.ts
├── eslint.config.js
├── hooks
│   ├── use-client-rendered.ts
│   ├── use-filter-timer-list.ts
│   └── use-notification.ts
├── middleware.ts
├── next-env.d.ts
├── next.config.js
├── no-prune.Dockerfile
├── node_modules
│   ├── @next
│   │   └── eslint-plugin-next -> ../../../../node_modules/.pnpm/@next+eslint-plugin-next@15.3.1/node_modules/@next/eslint-plugin-next
│   ├── @sono-repo
│   │   ├── eslint-config -> ../../../../packages/eslint-config
│   │   ├── hook -> ../../../../packages/hook
│   │   ├── tsconfig -> ../../../../packages/tsconfig
│   │   ├── ui -> ../../../../packages/ui
│   │   └── util -> ../../../../packages/util
│   ├── @tailwindcss
│   │   └── postcss -> ../../../../node_modules/.pnpm/@tailwindcss+postcss@4.1.4/node_modules/@tailwindcss/postcss
│   ├── @tanstack
│   │   ├── eslint-plugin-query -> ../../../../node_modules/.pnpm/@tanstack+eslint-plugin-query@5.68.0_eslint@9.25.0_jiti@2.4.2__typescript@5.3.2/node_modules/@tanstack/eslint-plugin-query
│   │   └── react-query -> ../../../../node_modules/.pnpm/@tanstack+react-query@5.69.0_react@19.1.0/node_modules/@tanstack/react-query
│   ├── @types
│   │   ├── node -> ../../../../node_modules/.pnpm/@types+node@18.19.80/node_modules/@types/node
│   │   ├── react -> ../../../../node_modules/.pnpm/@types+react@19.1.2/node_modules/@types/react
│   │   └── react-dom -> ../../../../node_modules/.pnpm/@types+react-dom@19.1.2_@types+react@19.1.2/node_modules/@types/react-dom
│   ├── @vercel
│   │   ├── analytics -> ../../../../node_modules/.pnpm/@vercel+analytics@1.5.0_next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0/node_modules/@vercel/analytics
│   │   └── speed-insights -> ../../../../node_modules/.pnpm/@vercel+speed-insights@1.2.0_next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0/node_modules/@vercel/speed-insights
│   ├── autoprefixer -> ../../../node_modules/.pnpm/autoprefixer@10.4.14_postcss@8.5.3/node_modules/autoprefixer
│   ├── axios -> ../../../node_modules/.pnpm/axios@1.8.4/node_modules/axios
│   ├── classnames -> ../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames
│   ├── eslint -> ../../../node_modules/.pnpm/eslint@9.25.0_jiti@2.4.2/node_modules/eslint
│   ├── framer-motion -> ../../../node_modules/.pnpm/framer-motion@11.18.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion
│   ├── next -> ../../../node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next
│   ├── postcss -> ../../../node_modules/.pnpm/postcss@8.5.3/node_modules/postcss
│   ├── react -> ../../../node_modules/.pnpm/react@19.1.0/node_modules/react
│   ├── react-dom -> ../../../node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom
│   ├── react-icons -> ../../../node_modules/.pnpm/react-icons@5.5.0_react@19.1.0/node_modules/react-icons
│   ├── react-responsive -> ../../../node_modules/.pnpm/react-responsive@9.0.2_react@19.1.0/node_modules/react-responsive
│   ├── sharp -> ../../../node_modules/.pnpm/sharp@0.32.6/node_modules/sharp
│   ├── sono-repo-react-timer -> ../../../packages/timer
│   ├── swiper -> ../../../node_modules/.pnpm/swiper@11.2.6/node_modules/swiper
│   ├── tailwindcss -> ../../../node_modules/.pnpm/tailwindcss@4.1.4/node_modules/tailwindcss
│   └── typescript -> ../../../node_modules/.pnpm/typescript@5.3.2/node_modules/typescript
├── package.json
├── postcss.config.js
├── provider
│   └── react-query-provider.tsx
├── prune.Dockerfile
├── public
│   ├── favicon.ico
│   ├── googleb1233a457a6f4a36.html
│   ├── icons
│   │   ├── emoticon_4.png
│   │   ├── emoticon_8.png
│   │   ├── img_profile_awake_empty.png
│   │   ├── img_profile_awake_fill.png
│   │   └── logo
│   │       ├── logo_144.png
│   │       └── logo.png
│   ├── naver5c7ebebaf68280a0397e1e9c96505c01.html
│   ├── pwa-sw.js
│   ├── robots.txt
│   ├── sw.js
│   ├── swe-worker-c6d9e90ca0bb3f3e.js
│   ├── workbox-21e663c2.js
│   └── worker-606d96c5c52423cb.js
├── README.md
├── service
│   ├── armories
│   │   ├── _constants.ts
│   │   ├── _types.ts
│   │   ├── _utils.ts
│   │   ├── index.ts
│   │   └── selector.ts
│   ├── axios
│   │   └── index.ts
│   ├── characters
│   │   ├── _types.ts
│   │   ├── index.ts
│   │   └── selector.ts
│   ├── game-contents
│   │   ├── _types.ts
│   │   ├── index.ts
│   │   └── selector.ts
│   ├── markets
│   │   ├── _types.ts
│   │   ├── index.ts
│   │   └── query.ts
│   └── news
│       ├── _types.ts
│       └── index.ts
├── style
│   └── main.css
├── test.md
├── tsconfig.json
├── tsconfig.tsbuildinfo
├── types
│   ├── content.ts
│   ├── element-json.ts
│   └── index.ts
├── utils
│   ├── elements.ts
│   └── index.ts
└── worker
    └── notification.ts

91 directories, 175 files
