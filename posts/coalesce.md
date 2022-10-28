---
title: "Coalesce"
date: "2022-10-27 12:39:00"
---

This was a fun little project I scrapped together in a week using Reddit's Python API Wrapper (PRAW). Simply put it does a reddit based google search because reddit seems to be the only reliable place for general information and queries, and regular people are rapidly catching on. Looking up _"best olive oil"_ if you're just getting into cooking on Google alone will bombard you with advertisments, blog posts about advertisements, or just misinformation alltogether. However, looking the same thing up using Reddit's search engine will give you absolutely nothing because it's terrible to use and grossly unreliable. Using best of both worlds with Google's tried & true search algo and Reddit's database of endless, authentic information into one seamless process just makes it all way easier - rather than clicking link after link in Google, the webapp simply gathers all the comments into one place with their respective titles/labels. In hindsight, I think this would've been better as an extension rather than a whole separate webapp, maybe something I might work on in the future.

**Hurdles**

The main challenge here was scraping Google search results. Not sure if you're even allowed to do that, but I managed to hack together a Python method after trial and error. There were already built tools to do so but they all required ridiculous subscription fees.

PRAW also presents a inherit disability in speed, it's just extremely slow so grabbing and parsing all that info takes a lot longer than I'd like. Maybe something I can improve on in the extension.

**Future Updates**

Mozilla already implemented a feature similar to this in Firefox but it's nowhere near as useful as it could be. I feel like there is a place for an extension like this, the difficult part would be parsing all that data quickly with as less friction as possible for the user.
