export async function parseComponent(ComponentData) {
  // TODO: allow regularly loaded imports without () => import(path)
  return (await ComponentData()).default();
}
