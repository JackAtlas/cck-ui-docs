---
title: Team
lang: en-US
layout: page
---

<VPTeamMembers size="small" :members />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const members = [
  {
    avatar: 'https://www.github.com/jackatlas.png',
    name: 'Jack Atlas',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/jackatlas' }
    ]
  }
]
</script>