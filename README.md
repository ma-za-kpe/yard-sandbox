# yard-sandbox

**A throwaway test repository for [Yard](https://ma-za-kpe.github.io/stood/yard/), the builder side of [Stood](https://github.com/ma-za-kpe/stood).** Nothing here is real work, real customer code or real money. It exists so Yard's GitHub integration can be built and shown safely, on a repository where nothing can be harmed.

> **Sandbox only.** Every branch, pull request and payment you see linked from here is simulated or uses the **PayPal sandbox**. No real money moves.

## Why this repository exists

Stood is an open-source release gate for code milestones: **agents pay agents, only when the work stands.** A buyer freezes signed acceptance tests for each milestone; a builder (a person or an agent) does the work; Stood releases the PayPal payment only when the evidence passes, and refuses it, with a named reason, when it doesn't. Yard is the companion product where buyers post that work and builders claim it.

To check real work, Yard has to read and write a real Git repository:

- create a branch for each claimed milestone,
- push the builder's commits there,
- open a pull request the buyer can review,
- and give Stood the exact commit to check against the frozen tests.

Yard does this through a GitHub App, [**Yard Builder**](https://github.com/apps/yard-builder), never a personal token. A GitHub App is only allowed into the repositories it is installed on, so we install it on **this repository and no other**. Developing and demonstrating the integration here means:

1. **No real project is at risk.** If something misbehaves (a wrong branch, a bad push, an attack test), it happens here.
2. **The permissions stay provably small.** Yard Builder can touch only this repository's contents and pull requests. It has no access to the Stood code, other repositories, organisations, settings or admin functions.
3. **Judges and reviewers can see it working.** The repository is public, so the branches and pull requests Yard creates during a demo can be inspected here.

## What you will see here

| Thing | Meaning |
|---|---|
| `main` | The base: the commit a milestone starts from |
| `wo/<project>/<milestone>` branches | One branch per claimed work order (milestone). Only Yard Builder pushes to them |
| Pull requests from `wo/*` into `main` | The builder's submission for that milestone, for the buyer to review |
| Signed test files | The acceptance tests the buyer froze before work started. Changing them refuses the payment (`signed_tests_changed`) |
| Synthetic projects (for example a small booking app) | Demo material only |

Branches and pull requests may be created, closed, force-reset or deleted at any time by tests and demos. **Do not open real work here, and do not rely on anything in this repository.**

## What Yard Builder is allowed to do

| Permission | Access | Why |
|---|---|---|
| Contents | Read and write | Create `wo/*` branches and push commits |
| Pull requests | Read and write | Open and update the milestone pull request |
| Metadata | Read | Required by GitHub for every app |

Nothing else: no administration, no workflows, no secrets, no issues, no organisation or account permissions. The app is installable only on the `ma-za-kpe` account, its webhook is off until Yard is deployed, and its private key never leaves the owner's machine and hosting. Installation tokens last at most an hour and are never stored.

## How a demo run looks

1. A buyer signs a blueprint in Yard: milestones, budgets and the frozen tests, pinned to a commit on `main`.
2. Stood creates the payment mandate on the **PayPal sandbox** and places a hold for the first milestone.
3. A builder claims the milestone; Yard Builder creates its `wo/*` branch here.
4. The builder's commits arrive on that branch, and Yard opens a pull request.
5. Stood checks the exact commit against the frozen tests and the rules:
   - **Release:** the PayPal hold is captured and the milestone shows as paid.
   - **Refuse:** the hold is voided, with a named reason (for example, signed tests changed), and a punch list goes back to the builder.
   - **Wait:** a person reviews.

## Safety notes

- **Sandbox only.** Stood uses the PayPal sandbox; there is no live PayPal app.
- **No secrets in this repository.** Test keys for any demo app are entered in Yard, encrypted, and deleted seven days after handover; they are never committed.
- **Synthetic data only.** No personal data belongs here.
- Found a problem? Report it in the Stood repository: <https://github.com/ma-za-kpe/stood/issues>, or privately as described in [SECURITY.md](https://github.com/ma-za-kpe/stood/blob/develop/SECURITY.md).

## Links

- Stood (source, MIT): <https://github.com/ma-za-kpe/stood>
- Website: <https://ma-za-kpe.github.io/stood/> · Yard: <https://ma-za-kpe.github.io/stood/yard/>
- How the GitHub App is set up: [SETUP §7](https://github.com/ma-za-kpe/stood/blob/develop/docs/SETUP.md#7-yard-github-app)
- Built for the [PayPal AI Hackathon 2026](https://paypalaihackathon.devpost.com/)

Licence: [MIT](https://github.com/ma-za-kpe/stood/blob/develop/LICENSE), the same as Stood.
