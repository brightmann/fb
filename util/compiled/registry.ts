import Mdx_crafting_react_hooks from './crafting-react-hooks.jsx'
import Mdx_how_to_install_multiple_versions_nodejs_nvm from './how-to-install-multiple-versions-nodejs-nvm.jsx'
import Mdx_mastering_git_commit_messages from './mastering-git-commit-messages.jsx'

const registry: Record<string, React.ComponentType> = {
  "crafting-react-hooks": Mdx_crafting_react_hooks,
  "how-to-install-multiple-versions-nodejs-nvm": Mdx_how_to_install_multiple_versions_nodejs_nvm,
  "mastering-git-commit-messages": Mdx_mastering_git_commit_messages,
}

export function getMdxComponent(slug: string): React.ComponentType | null {
  return registry[slug] ?? null
}
