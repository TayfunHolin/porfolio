# Back office

# **GoArt Worlds — Back Office (Admin Panel & Brand Portal)**

**Platform:** Web (Back Office / Admin Panel)

**Product Type:** Internal tool & brand management platform for a Web3 product

**Status:** Live in production

**Role:** UI/UX Designer — involved in all design and handoff processes

---

## **Context**

GoArt Worlds operates not only as a user-facing mobile application, but also as a **complex Web3 ecosystem** that requires full operational control behind the scenes.

The **Back Office** serves as the central control layer where:

- All in-app actions are configured and managed
- Content, rewards, and campaigns are created and published
- User activity and moderation are handled
- Web3-related mechanics are controlled safely
- Brand partners manage their own portals

This product is critical to the stability, scalability, and governance of the entire platform.

---

## **Product Challenge**

The GoArt Worlds Back Office is not a simple admin panel.

It is a **multi-role, multi-permission, multi-module system** supporting both internal teams and external brand partners.

Core modules include:

- User & role management
- Virtual Space & AR Space configuration
- Quest, game, and reward systems
- Airdrop, campaign, and loyalty mechanics
- Leaderboards, level rewards, and referrals
- Inventory, produced items, and IAP management
- Brand portals for partnerships
- Moderation, reports, and feedback
- Push notifications & email marketing
- Localization, app configuration, and admin tools

The main challenge:

> How do we design a highly powerful system that remains safe, understandable, and scalable for very different user roles?
> 

---

## **Reframing the Problem**

The complexity was not just about the number of screens.

The real issues were:

- Multiple user types using the same system
- Each role having different responsibilities and risk levels
- Actions taken in the back office directly affecting the live app

The problem was reframed as:

> “A back office should prioritize permissions, responsibility, and risk — not just features.”
> 

---

## **Design Approach**

### **Role-Based UX & Permissions**

The entire experience was designed around **role-based access control**.

User roles included:

- Admin
- Moderator
- Brand Manager
- Operations / Content roles

For each role:

- Visible pages
- Allowed actions
- Edit, publish, and approval rights

were clearly defined.

Users only see what they are authorized to see —

improving both **security and usability**.

---

### **Modular & Scalable Information Architecture**

Navigation and page hierarchy were designed to be:

- Responsibility-driven rather than feature-driven
- Modular and extensible
- Resistant to future feature growth

This ensured the back office could scale without breaking mental models or workflows.

---

### **Brand Portal & Partnership Management**

For in-app brand collaborations:

- Dedicated brand portals were designed
- Brands could manage their own campaigns, rewards, and content
- Clear permission boundaries prevented unsafe actions

This reduced internal operational load while giving partners **controlled autonomy**.

---

### **High-Risk Actions & Safe UX Patterns**

Since many actions affect the live product:

- Confirmation steps were added
- Warning and context messages were clearly surfaced
- Irreversible actions included extra safety layers

In this product, UX decisions were directly tied to **risk management**, not aesthetics.

---

## **Design System & Consistency**

While the back office did not replicate the mobile UI visually:

- Shared component logic
- Consistent form, table, and state patterns
- Predictable interaction behaviors

were applied across the system.

This reduced the learning curve and improved efficiency for daily users.

---

## **Handoff & Implementation**

Throughout the project:

- I participated in all design phases of the back office
- Components were handed off in a structured, reusable manner
- Role and permission edge cases were aligned with developers early
- Design intent was actively protected during implementation

For internal tools, **handoff is half the product**.

---

## **Outcome**

- The entire GoArt Worlds ecosystem became centrally manageable
- Internal teams gained a clear, secure operational tool
- Brand partnerships scaled without increasing internal workload
- Operational risks and errors were significantly reduced

The Back Office became an **invisible but critical pillar** of the product.

---

## **Key Learnings (Senior-Level Insights)**

1. Admin panel design is about **risk and responsibility**, not UI polish
2. Role-based UX improves both usability and security
3. If the back office doesn’t scale, the product won’t either
4. Brand portals are leverage tools, not just features
5. Handoff is even more critical in internal and admin products

---

### **Optional Short Portfolio Line**

> Designed the end-to-end UX/UI of GoArt Worlds’ Web3 back office, including role-based permissions, brand portals, and operational control systems.
>