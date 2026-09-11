# EVSELECT Editorial & Specification Guardrails

## 1. Strict Thai Market Specification Invariant (สเปกไทยเท่านั้น)
- All vehicle specifications (horsepower, torque, battery capacity, range, acceleration, charging speed) MUST strictly match official Thailand right-hand-drive (RHD) distributor releases, Thailand Eco Stickers, or verified Thai automotive press (Headlightmag, Autolifethailand).
- **Prohibited**:
  - Never use US/European domestic specs (e.g., Tesla Model 3 Performance US has 510 hp with Panasonic cells, but Thai spec imported from Shanghai has 460 hp / 723 Nm with LG cells).
  - Never sum raw front + rear electric motor gross ratings without battery output limits (e.g., do NOT write 627 hp for Model 3 Performance).
  - Never invent or assume battery chemistry or capacity. For Model 3 Highland AWD/Performance in Thailand, use official 75.0 kWh NMC.

## 2. 100% Original EVSELECT Brand Identity (ห้ามอ้างอิง CarExpert)
- Never mention "CarExpert", "สไตล์ CarExpert", "CarExpert-style", "CarExpert Review", or any other third-party review site in website copy, UI banners, schemas, metadata, or code comments.
- Always use **"EVSELECT Reviews"**, **"EVSELECT In-Depth Review"**, or **"EVSELECT Final Takeaway"**.
- The platform is an independent authority on Thai EV fitment and performance. Referencing external media sites undermines customer trust and makes the site appear derivative.
