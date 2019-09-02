const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // If a node with the type PostJson is seen, grab the url in `node.url` and create a file node out of it.
  if (node.internal.type === "PostJson") {
    let fileNode = await createRemoteFileNode({
      url: node.url,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    })

    // attach the new node to the parent node
    if (fileNode) {
      node.localFile___NODE = fileNode.id
    }
  }
}
