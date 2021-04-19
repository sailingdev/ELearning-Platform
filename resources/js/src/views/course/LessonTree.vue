<template>
    <div v-if="dataReady">
        <v-jstree ref="tree"
                  :data="lessons"
                  @item-click="itemClick"></v-jstree>
    </div>
</template>

<script>
    import VJstree from 'vue-jstree-2';
    export default {
        name: 'LessonTree',
        components: {
            VJstree
        },
        data(){
            return {
                lessons: [],
                dataReady: false,
                editingNode: {},
                editingItem: {}
            }
        },
        computed: {
            myCustomStyles () {
                return {
                    tree: {
                        height: 'auto',
                        maxHeight: '300px',
                        overflowY: 'visible',
                        display: 'inline-block'
                    },
                    row: {
                        width: '500px',
                        cursor: 'pointer',
                        child: {
                            height: '35px'
                        }
                    },
                    text: {
                        style: {},
                        active: {
                            style: {
                                'font-weight': 'bold',
                                color: '#2ECC71'
                            }
                        }
                    }
                }
            },
            myCustomOptions () {
                return {
                    treeEvents: {
                        expanded: {
                            state: false
                        },
                        collapsed: {
                            state: false
                        },
                        selected: {
                            state: false
                        },
                        checked: {
                            state: true,
                            fn: this.myCheckedFunction
                        }
                    },
                    events: {
                        expanded: {
                            state: true
                        },
                        selected: {
                            state: true
                        },
                        checked: {
                            state: true
                        },
                        editableName: {
                            state: true,
                            calledEvent: 'expanded'
                        }
                    },
                    addNode: {
                        state: true,
                        fn: this.addNodeFunction,
                        appearOnHover: false
                    },
                    editNode: {
                        state: false,
                        fn: null,
                        appearOnHover: false
                    },
                    deleteNode: {
                        state: true,
                        fn: this.deleteNodeFunction,
                        appearOnHover: true
                    },
                    showTags: true
                }
            }
        },
        methods: {
            deleteNodeFunction: function (node) {
                const nodePath = this.$refs['my-tree'].findNodePath(node.id)
                const parentNodeId = nodePath.slice(-2, -1)[0]
                if (parentNodeId === undefined) {
                    // 'root' node
                    const nodeIndex =
                        this.$refs['my-tree'].nodes.findIndex((x) => x.id !== node.id) - 1
                    this.$refs['my-tree'].nodes.splice(nodeIndex, 1)
                } else {
                    // child node
                    const parentNode = this.$refs['my-tree'].findNode(parentNodeId)
                    const nodeIndex =
                        parentNode.nodes.findIndex((x) => x.id !== node.id) - 1
                    parentNode.nodes.splice(nodeIndex, 1)
                }
                console.log('example: remove node', node.id)
            },
            addNodeFunction: function (node) {
                const newNode = {
                    text: 'Grandchild 2',
                    id: Math.floor(Math.random() * 100)
                }
                console.log('example: add node', newNode)
                if (node.nodes === undefined) {
                    // the node doesn't have childs
                    // I use $set to ensure that VueJs detect the change
                    this.$set(node, 'nodes', [newNode])
                } else {
                    node.nodes.push(newNode)
                }
            },
            itemClick (node) {
                console.log('Node Clicked', node.model)
                switch (node.model.type) {
                    case 'course':
                        this.$emit('itemId', node.model.id);
                        this.$emit('selectedCourse');
                        break;
                    case 'lesson':
                        this.$emit('itemId', node.model.id);
                        this.$emit('selectedLesson', node.model.id);
                        break;
                    case undefined:
                        this.$emit('itemId', null);
                        this.$emit('selectedOthers');
                }
            },
        },
        async mounted(){
            await this.$store.commit('SET_BEARER');
            await this.$store.dispatch('course/indexCourse');
            this.lessons = this.$store.getters['course/courses'];
            console.log('Lessons',this.lessons)
            this.dataReady = true;
        },
    }
</script>

<style scoped>

</style>
