<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="../client/public/Spirit_Link-removebg-preview.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Spirit-Link</h3>

  <p align="center">
Elevate Security, Simplify Identity - Zero Compromises, Zero Worries, Zero Knowledge Proof!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>



## Table of Contents
- [Introduction](#introduction)
- [User Flow](#user-flow)
    - [Authentication Process](#authentication-process)
    - [Proof Tokenization](#proof-tokenization)
- [Key Features](#key-features)
    - [Privacy-Centric Approach](#privacy-centric-approach)
    - [Streamlined Processes](#streamlined-processes)
    - [Enhanced Security](#enhanced-security)
    - [Trustworthy Online Services](#trustworthy-online-services)
    - [Compatibility with Web3](#compatibility-with-web3)
- [Use Case Example](#use-case-example)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)



<!-- ABOUT THE PROJECT -->

## Introduction:
Spirit Link addresses the pervasive issue of individuals divulging excessive personal information for identity verification purposes. The platform enables users to provide only the necessary proof without compromising additional details. This innovation enhances privacy, simplifies processes, and fortifies security, fundamentally transforming online services. spirit link operates on Zero Knowledge technology, a paradigm shift in data protection.

## User Flow:

![SL-Protocol-Flow](./assets/SL-Protocol-Flow.jpg)

### Authentication Process:
- Users initiate the Proof generation by validating an anonymized claim pertaining to their exclusive data.
- Utilizing snarkjs and Groth16, a verification process is initiated to generate a proof.
- Spirit link employs smart contracts to validate and tokenize the proof as a non-transferable token (SLT).

### Proof Tokenization:
- The generated proofs, now represented as SBTs, embody authenticated claims sanctioned by zkVault.
- The SBTs are minted on-chain, aligning with the expanding web3 applications ecosystem.
- Badges, in the form of SBTs, signify verified actions within a user's digital identity. For instance, a ZK SBT could confirm a user's attainment of a specific threshold of Twitter followers.

## Key Features:

  ### Privacy-Centric Approach:
  zkVault allows users to disclose only essential proof, preserving the confidentiality of additional information.

### Streamlined Processes:
The platform streamlines identity verification processes by leveraging Zero Knowledge technology.

### Enhanced Security:
Through the use of non-transferable SBTs, zkVault ensures the security and integrity of verified claims.

### Trustworthy Online Services:
The implementation of zkVault instills trust in online services by offering a secure repository for proofs, making interactions more reliable for all stakeholders.

### Compatibility with Web3:
SBTs issued by zkVault align seamlessly with the web3 applications ecosystem, fostering compatibility and interoperability.

## Use Case Example:
A user may possess a ZK SBT demonstrating they meet a specific threshold of Twitter followers, illustrating the versatility and applicability of zkVault in various contexts.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Built With

### LUKSO's Spec

- [SpiritLink for CreditScore](https://explorer.execution.testnet.lukso.network/address/0x8A4AA4679EB53507023F74897aE3A8570fa224ca) (lukso tesetnet deployment link) `0x8A4AA4679EB53507023F74897aE3A8570fa224ca`
- [SpiritLink for Follower](https://explorer.execution.testnet.lukso.network/address/0xF0D56Ce5A1b550F07481dc98959EFD79eE9ab540) (lukso tesetnet deployment link) `0xF0D56Ce5A1b550F07481dc98959EFD79eE9ab540`
- [SpiritLink for Age](https://explorer.execution.testnet.lukso.network/address/0xC2D208f5E94f4d7c0BFb3bb8352530f28bb31FE1) (lukso tesetnet deployment link) `0xC2D208f5E94f4d7c0BFb3bb8352530f28bb31FE1`
- [CreditScore-Verifier](https://explorer.execution.testnet.lukso.network/address/0xd34Dfde3EaBFAa64fD60944b045003F2B9632D70) (lukso tesetnet deployment link) `0xd34Dfde3EaBFAa64fD60944b045003F2B9632D70`
- [Follower-Verifier](https://explorer.execution.testnet.lukso.network/address/0xb722Fb125f85D727a2e766C4e3A86E205746D0A3) (lukso tesetnet deployment link) `0xb722Fb125f85D727a2e766C4e3A86E205746D0A3`
- [Age-Verifier](https://explorer.execution.testnet.lukso.network/address/0xD1fc6A6300B65A9996207B1B137739F5FECfe1E1) (lukso tesetnet deployment link) `0xD1fc6A6300B65A9996207B1B137739F5FECfe1E1`

### Other Spec

- [React][react-url]
- [Hardhat](https://hardhat.org/)
- [Foundry](https://book.getfoundry.sh/)
- [Express](https://expressjs.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP
## Future Work:

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/startup-dreamer/ZeroGuard/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@Krieger]([https://twitter.com/your_username](https://twitter.com/Startup_dmr)) - prsumit35@gmail.com

Project Link: [https://github.com/startup-dreamer/ZeroGuard](https://github.com/startup-dreamer/ZeroGuard)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thanks to all the sponsors and organizers for making this BuildUP #2 by LUKSO possible.
Mentors have been helping us, giving reviews with various aspects of the project and we are grateful to them for that.

* [LUKSO's Documentation](https://docs.lukso.tech/)
* [Network Parameters](https://docs.lukso.tech/networks/testnet/parameters)
* [LSP Smart Contracts Repository Overview](https://www.youtube.com/watch?v=E8Ih5n7auKY&ab_channel=LUKSOBlockchain)
* [UP Browser Extension](https://chrome.google.com/webstore/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
