# StripperNFT Project Plan

This document outlines the necessary steps we need to take to bring this project to fruition.

## Relevant Links

- [Project Brief][1]

## Technical Decisions

Components:

* web: HTTP site
* sol: Smart contract
* obj: Content storage/retreival API
* bld: Software delivery pipeline (CI/CD, cloud etc.)

- 2021-09-06
    - sol: We will target Ethereum mainnet
    - web: We will use Vue3 options API for the frontend
    - web: We will deploy the frontend as a static site on AWS S3
    - obj: We will deploy the content retreival API as an AWS Lambda function(s)
    - bld: We will use GitHub Actions as our software delivery agent

## Timeline

| Target Date | Description |
|--- | --- |
| Sunday 2021-09-19 | Have a working MVP running locally ([local mvp][2] |

<a href="local-mvp">
### Local MVP</a>


[1]: project-brief.md "Brief"
[2]: #local-mvp "lMVP
