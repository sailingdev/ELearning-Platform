<template>
    <div id="data-list-list-view" class="data-list-container">
        <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="users">

            <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

                <div class="flex flex-wrap-reverse items-center data-list-btn-container">

                    <!-- ACTION - DROPDOWN -->
                    <vs-dropdown vs-trigger-click class="dd-actions cursor-pointer mr-4 mb-4">

                        <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full">
                            <span class="mr-2">Actions</span>
                            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                        </div>

                        <vs-dropdown-menu>

                            <vs-dropdown-item>
                                <span class="flex items-center">
                                  <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                                  <span>Delete</span>
                                </span>
                            </vs-dropdown-item>

                            <vs-dropdown-item>
                                <span class="flex items-center">
                                  <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                                  <span>Archive</span>
                                </span>
                            </vs-dropdown-item>

                            <vs-dropdown-item>
                                <span class="flex items-center">
                                  <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                                  <span>Print</span>
                                </span>
                            </vs-dropdown-item>

                            <vs-dropdown-item>
                                <span class="flex items-center">
                                  <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" class="mr-2" />
                                  <span>Another Action</span>
                                </span>
                            </vs-dropdown-item>

                        </vs-dropdown-menu>
                    </vs-dropdown>

                    <!-- ADD NEW -->
                    <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
                        <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                        <span class="ml-2 text-base text-primary">Add New</span>
                    </div>
                </div>

                <!-- ITEMS PER PAGE -->
                <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
                    <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                        <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ users.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : users.length }} of {{ queriedItems }}</span>
                        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                    </div>
                    <vs-dropdown-menu>

                        <vs-dropdown-item @click="itemsPerPage=4">
                            <span>4</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="itemsPerPage=10">
                            <span>10</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="itemsPerPage=15">
                            <span>15</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="itemsPerPage=20">
                            <span>20</span>
                        </vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </div>

            <template slot="thead">
                <vs-th sort-key="id" >Nor</vs-th>
                <vs-th sort-key="name">Title</vs-th>
                <vs-th sort-key="category">Category</vs-th>
                <vs-th sort-key="created_at">Created at</vs-th>
                <vs-th>Action</vs-th>
            </template>

            <template slot-scope="{data}">
                <tbody>
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td>
                        <p class="product-name font-medium truncate">{{ indextr +1 }}</p>
                    </vs-td>
                    <vs-td>
                        <p class="product-name font-medium truncate">{{ tr.title }}</p>
                    </vs-td>

                    <vs-td>
                        <vs-chip :color="getCategoryColor(tr.category.id)" class="product-order-status">{{ tr.category.name }}</vs-chip>
                    </vs-td>

                    <vs-td>
                        <p class="product-name font-medium truncate">{{ tr.created_at }}</p>
                    </vs-td>

                    <vs-td class="whitespace-no-wrap">
                        <feather-icon icon="EyeIcon" svgClasses="w-5 h-5 hover:text-success stroke-current" class="mr-2" @click.stop="editData(tr)" />
                        <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
                        <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)" />
                    </vs-td>

                </vs-tr>
                </tbody>
            </template>
        </vs-table>
    </div>
</template>

<script>
  export default {
    name: 'Userlist',
      data(){
        return {
            selected: [],
            itemsPerPage: 4,
            isMounted: false,
        }
      },
      computed: {
          currentPage () {
              if (this.isMounted) {
                  return this.$refs.table.currentx
              }
              return 0
          },
          users () {
              return this.$store.state.user.dataList
          },
          queriedItems () {
              // return this.$refs.table ? this.$refs.table.queriedResults.length : this.products.length
          }
      },
      methods: {
          addNewData () {
              // this.sidebarData = {}
              // this.toggleDataSidebar(true)
          },
          deleteData (id) {
              // this.$store.dispatch('dataList/removeItem', id).catch(err => { console.error(err) })
          },
          editData (data) {
              // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
              // this.sidebarData = data
              // this.toggleDataSidebar(true)
          },
          getCategoryColor (id) {
              if (id === 2) return 'success'
              if (id === 3)  return 'warning'
              return 'primary'
          },
      },
      mounted () {
          // this.isMounted = true
          // console.log(this.$store.state.dataList)
      }
  }
</script>


<style lang="scss" >
    #data-list-list-view {
        .vs-con-table {

            /*
              Below media-queries is fix for responsiveness of action buttons
              Note: If you change action buttons or layout of this page, Please remove below style
            */
            @media (max-width: 689px) {
                .vs-table--search {
                    margin-left: 0;
                    max-width: unset;
                    width: 100%;

                    .vs-table--search-input {
                        width: 100%;
                    }
                }
            }

            @media (max-width: 461px) {
                .items-per-page-handler {
                    display: none;
                }
            }

            @media (max-width: 341px) {
                .data-list-btn-container {
                    width: 100%;

                    .dd-actions,
                    .btn-add-new {
                        width: 100%;
                        margin-right: 0 !important;
                    }
                }
            }

            .product-name {
                max-width: 23rem;
            }

            .vs-table--header {
                display: flex;
                flex-wrap: wrap;
                margin-left: 1.5rem;
                margin-right: 1.5rem;
                > span {
                    display: flex;
                    flex-grow: 1;
                }

                .vs-table--search{
                    padding-top: 0;

                    .vs-table--search-input {
                        padding: 0.9rem 2.5rem;
                        font-size: 1rem;

                        &+i {
                            left: 1rem;
                        }

                        &:focus+i {
                            left: 1rem;
                        }
                    }
                }
            }

            .vs-table {
                border-collapse: separate;
                border-spacing: 0 1.3rem;
                padding: 0 1rem;

                tr{
                    box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
                    td{
                        padding: 20px;
                        &:first-child{
                            border-top-left-radius: .5rem;
                            border-bottom-left-radius: .5rem;
                        }
                        &:last-child{
                            border-top-right-radius: .5rem;
                            border-bottom-right-radius: .5rem;
                        }
                    }
                    td.td-check{
                        padding: 20px !important;
                    }
                }
            }

            .vs-table--thead{
                th {
                    padding-top: 0;
                    padding-bottom: 0;

                    .vs-table-text{
                        text-transform: uppercase;
                        font-weight: 600;
                    }
                }
                th.td-check{
                    padding: 0 15px !important;
                }
                tr{
                    background: none;
                    box-shadow: none;
                }
            }

            .vs-table--pagination {
                justify-content: center;
            }
        }
    }
</style>
