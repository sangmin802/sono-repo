# SONO-REPO
## lostark-hands-next
유저 정보제공 사이트

`@todo` 기능단위 파일 모으기
- service, client-component/modals: 사용하고있는 페이지 하위 폴더로 이동 필요

```bash
.
├── app
│   ├── @component // 각 페이지 별 구성하고 있는 기능에 대한 컴포넌트
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
├── client-component // 공통 기본 컴포넌트
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
│   ├── modal // 추후 사용하고 있는 기능 컴포넌트와 동일 위치로 이관 필요
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
├── provider
│   └── react-query-provider.tsx
├── prune.Dockerfile
├── service // 사용하고있는 위치로 이관 필요
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
├── types
│   ├── content.ts
│   ├── element-json.ts
│   └── index.ts
├── utils
│   ├── elements.ts
│   └── index.ts
└── worker
    └── notification.ts
```
