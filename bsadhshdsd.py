import os

BASE = os.path.join("src", "controllers")
INDEX_FILE = os.path.join(BASE, "index.js")

# possíveis correções (origem -> destinos possíveis, na ordem de preferência)
FIXES = {
    "items": ["ingredients", "resource", "database"],
    "users": ["user", "users"],
    "orderItems": ["order_items", "orderitems", "orderItems"],
}

def folder_exists(name: str) -> bool:
    return os.path.isdir(os.path.join(BASE, name))

def pick_existing(dest_candidates):
    for d in dest_candidates:
        if folder_exists(d):
            return d
    return None

def main():
    if not os.path.isfile(INDEX_FILE):
        raise RuntimeError(f"Não encontrei: {INDEX_FILE}")

    with open(INDEX_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    changed_any = False

    for src_folder, dest_candidates in FIXES.items():
        if f'./{src_folder}/' in content:
            dest = pick_existing(dest_candidates)
            if not dest:
                print(f"⚠ No index existe './{src_folder}/' mas não achei nenhuma pasta destino: {dest_candidates}")
                continue

            content = content.replace(f'./{src_folder}/', f'./{dest}/')
            print(f"✔ Corrigido: ./{src_folder}/  ->  ./{dest}/")
            changed_any = True

    if changed_any:
        with open(INDEX_FILE, "w", encoding="utf-8") as f:
            f.write(content)
        print("✅ Atualizado: src/controllers/index.js")
    else:
        print("ℹ Nada para corrigir no index.js (já está consistente).")

if __name__ == "__main__":
    main()
