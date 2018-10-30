<template>
    <div>
        <Table :loading="loading" highlight-row ref="currentRowTable" width="800" height="600" border
               stripe
               :columns="columns1"
               :data="data1"></Table>
        <Button @click="handleClearCurrentRow">Clear</Button>
        <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button>
        <Button type="primary" size="large" @click="exportData(1)">
            <Icon type="ios-download-outline"></Icon>
            Export source data
        </Button>
        <Button type="primary" size="large" @click="exportData(2)">
            <Icon type="ios-download-outline"></Icon>
            Export sorting and
            filtered data
        </Button>
        <Button type="primary" size="large" @click="exportData(3)">
            <Icon type="ios-download-outline"></Icon>
            Export custom
            data
        </Button>
        Change Loading Status
        <iSwitch v-model="loading"></iSwitch>
    </div>
</template>

<script>
    /*import Vue from 'vue'
    import {Button, Icon, Modal, Switch, Table} from 'iview';

    Vue.component('Table', Table);
    Vue.component('iSwitch', Switch);
    Vue.component('iButton', Button);
    Vue.component('Icon', Icon);

    Vue.prototype.$Modal = Modal*/


    export default {
        data() {
            let self = this;
            return {
                loading: false,
                columns1: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: 'left'
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100,
                        sortable: true,
                        filters: [
                            {
                                label: 'Greater than 25',
                                value: 1
                            },
                            {
                                label: 'Less than 25',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod(value, row) {
                            if (value === 1) {
                                return row.age > 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Edit'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ]
            }
        },
        methods: {
            handleClearCurrentRow() {
                this.$refs.currentRowTable.clearCurrentRow();
            },
            handleSelectAll(status) {
                this.$refs.currentRowTable.selectAll(status);
            },
            show(index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data1[index].name}<br>Age：${this.data1[index].age}<br>Address：${this.data1[index].address}`
                })

            },
            remove(index) {
                this.$refs.currentRowTable.data.splice(index, 1);
            },
            exportData(type) {
                if (type === 1) {
                    this.$refs.currentRowTable.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.currentRowTable.exportCsv({
                        filename: 'Sorting and filtering data',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.currentRowTable.exportCsv({
                        filename: 'Custom data',
                        columns: this.columns1.filter((col, index) => index < 4),
                        data: this.data1.filter((data, index) => index < 4)
                    });
                }
            }
        }
    }
</script>