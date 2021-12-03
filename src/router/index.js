import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout';

Vue.use(Router);

export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/index'),
            meta: { title: 'Dashboard首页', icon: 'dashboard', noCache: true, affix: true }
        }]
    },
    // 商品管理
    {
        path: '/commodity',
        component: Layout,
        redirect: '/commodity/supplierManagement',
        name: 'Commodity',
        meta: { title: '商品管理', icon: 'el-icon-s-help' },
        children: [
            {
                path: 'supplier',
                name: 'Supplier',
                component: () => import('@/views/commodity/supplier'),
                meta: { title: '供应商管理', icon: 'tree' }
            },
            {
                path: 'brand',
                name: 'Brand',
                component: () => import('@/views/commodity/brand'),
                meta: { title: '品牌信息', icon: 'tree' }
            },
            {
                path: 'category',
                name: 'Category',
                component: () => import('@/views/commodity/category'),
                meta: { title: '商品类别', icon: 'tree' }
            },
            {
                path: 'colour',
                name: 'Colour',
                component: () => import('@/views/commodity/colour'),
                meta: { title: '颜色信息', icon: 'tree' }
            },
            {
                path: 'size',
                name: 'Size',
                component: () => import('@/views/commodity/size'),
                meta: { title: '尺码信息', icon: 'tree' }
            },
            {
                path: 'doc',
                name: 'Doc',
                component: () => import('@/views/commodity/doc'),
                meta: { title: '商品档案', icon: 'tree' }
            },
            {
                path: 'purchasePrice',
                name: 'PurchasePrice',
                component: () => import('@/views/commodity/purchasePrice'),
                meta: { title: '进价调整', icon: 'tree' }
            },
            {
                path: 'modifyPrice',
                name: 'ModifyPrice',
                component: () => import('@/views/commodity/modifyPrice'),
                meta: { title: '调价查询', icon: 'tree' }
            }
        ]
    },
    // 采购订单
    {
        path: '/purchase',
        component: Layout,
        redirect: '/purchase/purchaseOrder',
        name: 'Purchase',
        meta: { title: '采购管理', icon: 'form' },
        children: [
            {
                path: 'order',
                name: 'Order',
                component: () => import('@/views/purchase/order'),
                meta: { title: '采购订单', icon: 'form' }
            },
            {
                path: 'putIn',
                name: 'PutIn',
                component: () => import('@/views/purchase/putIn'),
                meta: { title: '商品入库', icon: 'tree' }
            },
            {
                path: 'returns',
                name: 'Returns',
                component: () => import('@/views/purchase/returns'),
                meta: { title: '退货出库', icon: 'tree' }
            },
            {
                path: 'details',
                name: 'Details',
                component: () => import('@/views/purchase/details'),
                meta: { title: '采购明细', icon: 'tree' }
            },
            {
                path: 'summary',
                name: 'Summary',
                component: () => import('@/views/purchase/summary'),
                meta: { title: '采购汇总', icon: 'tree' }
            },
            {
                path: 'settlement',
                name: 'Settlement',
                component: () => import('@/views/purchase/settlement'),
                meta: { title: '供应商结算', icon: 'tree' }
            }
        ]
    },
    // 库存管理
    {
        path: '/stock',
        component: Layout,
        redirect: '/stock/outInPutWarehouse',
        name: 'Stock',
        meta: {
            title: '库存管理',
            icon: 'nested'
        },
        children: [
            {
                path: 'warehouse',
                name: 'Warehouse',
                component: () => import('@/views/stock/warehouse'),
                meta: { title: '出入库明细', icon: 'tree' }
            },
            {
                path: 'query',
                name: 'Query',
                component: () => import('@/views/stock/query'),
                meta: { title: '库存查询', icon: 'tree' }
            },
            {
                path: 'apply',
                name: 'apply',
                component: () => import('@/views/stock/apply'),
                meta: { title: '调拨申请', icon: 'tree' }
            },
            {
                path: 'outPut',
                name: 'OutPut',
                component: () => import('@/views/stock/outPut'),
                meta: { title: '调拨出库', icon: 'tree' }
            },
            {
                path: 'putIn',
                name: 'PutIn',
                component: () => import('@/views/stock/putIn'),
                meta: { title: '调拨入库', icon: 'tree' }
            },
            {
                path: 'inventory',
                name: 'Inventory',
                component: () => import('@/views/stock/inventory'),
                meta: { title: '库存盘点', icon: 'tree' }
            },
            {
                path: 'adjust',
                name: 'Adjust',
                component: () => import('@/views/stock/adjust'),
                meta: { title: '库存调整单', icon: 'tree' }
            },
            {
                path: 'warn',
                name: 'Warn',
                component: () => import('@/views/stock/warn'),
                meta: { title: '库存预警', icon: 'tree' }
            },
            {
                path: 'business',
                name: 'Business',
                component: () => import('@/views/stock/business/index'),
                meta: { title: '盘点业务', icon: 'tree' },
                redirect: '/stock/business/inventoryApplication',
                children: [
                    {
                        path: 'inventoryApplication',
                        component: () => import('@/views/stock/business/apply'),
                        name: 'Apply',
                        meta: { title: '盘点单申请' }
                    },
                    {
                        path: 'stocktaking',
                        component: () => import('@/views/stock/business/stocktaking'),
                        name: 'Stocktaking',
                        meta: { title: '存货盘点' }
                    },
                    {
                        path: 'different',
                        component: () => import('@/views/stock/business/different'),
                        name: 'Different',
                        meta: { title: '差异处理' }
                    },
                    {
                        path: 'handle',
                        component: () => import('@/views/stock/business/handle'),
                        name: 'Handle',
                        meta: { title: '盘点差异报表' }
                    }
                ]
            }
        ]
    },
    // 会员管理
    {
        path: '/member',
        component: Layout,
        redirect: '/member/generalize',
        name: 'Member',
        meta: {
            title: '会员管理',
            icon: 'nested'
        },
        children: [
            {
                path: 'generalize',
                name: 'Generalize',
                component: () => import('@/views/member/generalize'),
                meta: { title: '会员概括', icon: 'tree' }
            },
            {
                path: 'doc',
                name: 'Doc',
                component: () => import('@/views/member/doc'),
                meta: { title: '会员档案', icon: 'tree' }
            },
            {
                path: 'reconciliation',
                name: 'Reconciliation',
                component: () => import('@/views/member/reconciliation'),
                meta: { title: '会员对账', icon: 'tree' }
            },
            {
                path: 'report',
                component: () => import('@/views/member/report/index'),
                name: 'Report',
                meta: { title: '会员报表', icon: 'tree' },
                redirect: '/member/statement/recharge',
                children: [
                    {
                        path: 'recharge',
                        component: () => import('@/views/member/report/recharge'),
                        name: 'Recharge',
                        meta: { title: '充值报表' }
                    },
                    {
                        path: 'consumption',
                        component: () => import('@/views/member/report/consume'),
                        name: 'Consumption',
                        meta: { title: '消费报表' }
                    },
                    {
                        path: 'integral',
                        component: () => import('@/views/member/report/integral'),
                        name: 'Integral',
                        meta: { title: '积分明细' }
                    },
                    {
                        path: 'exchange',
                        component: () => import('@/views/member/report/exchange'),
                        name: 'Exchange',
                        meta: { title: '兑换明细' }
                    }
                ]
            },
            {
                path: 'rule',
                component: () => import('@/views/member/rule/index'),
                name: 'Rule',
                meta: { title: '规则设置', icon: 'tree' },
                redirect: '/member/rule/type',
                children: [
                    {
                        path: 'type',
                        component: () => import('@/views/member/rule/type'),
                        name: 'Type',
                        meta: { title: '会员类别' }
                    },
                    {
                        path: 'integral',
                        component: () => import('@/views/member/rule/integral'),
                        name: 'Integral',
                        meta: { title: '会员积分' }
                    },
                    {
                        path: 'recharge',
                        component: () => import('@/views/member/rule/recharge'),
                        name: 'Recharge',
                        meta: { title: '充值赠送' }
                    },
                    {
                        path: 'commodity',
                        component: () => import('@/views/member/rule/commodity'),
                        name: 'Commodity',
                        meta: { title: '积分商品' }
                    }
                ]
            },
            {
                path: 'vipCard',
                name: 'VipCard',
                component: () => import('@/views/member/vipCard'),
                meta: { title: '会员卡管理', icon: 'tree' }
            },
            {
                path: 'rfm',
                name: 'RFM',
                component: () => import('@/views/member/rfm'),
                meta: { title: '会员RFM', icon: 'tree' }
            }
        ]
    },

    {
        path: '/retail',
        component: Layout,
        redirect: '/retail/sellWaterBill',
        name: 'Retail',
        meta: {
            title: '零售数据',
            icon: 'nested'
        },
        children: [
            {
                path: 'sellWaterBill',
                name: 'SellWaterBill',
                component: () => import('@/views/retail/inventoryOne/sellWaterBill'),
                meta: { title: '销售流水', icon: 'tree' }
            },
            {
                path: 'cashierCheck',
                name: 'CashierCheck',
                component: () => import('@/views/retail/inventoryOne/cashierCheck'),
                meta: { title: '收银对账', icon: 'tree' }
            },
            {
                path: 'sellCollect',
                name: 'SellCollect',
                component: () => import('@/views/retail/inventoryOne/sellCollect'),
                meta: { title: '销售汇总', icon: 'tree' }
            },
            {
                path: 'cashierWaterBill',
                name: 'CashierWaterBill',
                component: () => import('@/views/retail/inventoryOne/cashierWaterBill'),
                meta: { title: '收银流水', icon: 'tree' }
            },
            {
                path: 'shopStatement',
                name: 'ShopStatement',
                component: () => import('@/views/retail/inventoryOne/shopStatement'),
                meta: { title: '营业员报表', icon: 'tree' }
            },
            {
                path: 'salesTarget',
                component: () => import('@/views/retail/salesTarget/index'), // Parent router-view
                name: 'SalesTarget',
                meta: { title: '销售目标' },
                redirect: '/inventory/salesTarget/salesTargets',
                children: [
                    {
                        path: 'salesTargets',
                        component: () => import('@/views/retail/salesTarget/salesTargets'),
                        name: 'SalesTarget',
                        meta: { title: '销售目标' }
                    },
                    {
                        path: 'targetResults',
                        component: () => import('@/views/retail/salesTarget/targetResults'),
                        name: 'TargetResults',
                        meta: { title: '目标结果汇总' }
                    },
                    {
                        path: 'supervision',
                        component: () => import('@/views/retail/salesTarget/supervision'),
                        name: 'Supervision',
                        meta: { title: '执行监督' }
                    }
                ]
            }
        ]
    },

    {
        path: '/analyze',
        component: Layout,
        redirect: '/analyze/supplierManagement',
        name: 'Analyze',
        meta: { title: '决策分析', icon: 'el-icon-s-help' },
        children: [
            {
                path: 'supplierManagement',
                name: 'SupplierManagement',
                component: () => import('@/views/analyze/supplierManagement'),
                meta: { title: '销售分析', icon: 'tree' }
            },
            {
                path: 'brandInformation',
                name: 'BrandInformation',
                component: () => import('@/views/analyze/brandInformation'),
                meta: { title: '毛利分析', icon: 'tree' }
            },
            {
                path: 'merchandiseCategories',
                name: 'MerchandiseCategories',
                component: () => import('@/views/analyze/merchandiseCategories'),
                meta: { title: '库存分析', icon: 'tree' }
            },
            {
                path: 'colourInformation',
                name: 'ColourInformation',
                component: () => import('@/views/analyze/colourInformation'),
                meta: { title: '采购分析', icon: 'tree' }
            },
            {
                path: 'sizeInformation',
                name: 'SizeInformation',
                component: () => import('@/views/analyze/sizeInformation'),
                meta: { title: '客单分析', icon: 'tree' }
            }
        ]
    },

    {
        path: 'external-link',
        component: Layout,
        children: [
            {
                path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
                meta: { title: 'External Link', icon: 'link' }
            }
        ]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
];

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

export default router;
