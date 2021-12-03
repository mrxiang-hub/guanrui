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
                name: 'size',
                component: () => import('@/views/commodity/size'),
                meta: { title: '尺码信息', icon: 'tree' }
            },
            {
                path: 'merchandiseFile',
                name: 'MerchandiseFile',
                component: () => import('@/views/commodity/merchandiseFile'),
                meta: { title: '商品档案', icon: 'tree' }
            },
            {
                path: 'purchasingPriceAdjust',
                name: 'PurchasingPriceAdjust',
                component: () => import('@/views/commodity/purchasingPriceAdjust'),
                meta: { title: '进价调整', icon: 'tree' }
            },
            {
                path: 'priceAdjustmentQuery',
                name: 'PriceAdjustmentQuery',
                component: () => import('@/views/commodity/priceAdjustmentQuery'),
                meta: { title: '调价查询', icon: 'tree' }
            }
        ]
    },

    {
        path: '/purchase',
        component: Layout,
        redirect: '/purchase/purchaseOrder', //
        name: 'Purchase', //
        meta: { title: '采购管理', icon: 'form' }, //
        children: [
            {
                path: 'purchaseOrder',
                name: 'PurchaseOrder',
                component: () => import('@/views/purchase/purchaseOrder'),
                meta: { title: '采购订单', icon: 'form' }
            },
            {
                path: 'commodityPut',
                name: 'CommodityPut',
                component: () => import('@/views/purchase/commodityPut'),
                meta: { title: '商品入库', icon: 'tree' }
            },
            {
                path: 'returnCargo',
                name: 'ReturnCargo',
                component: () => import('@/views/purchase/returnCargo'),
                meta: { title: '退货出库', icon: 'tree' }
            },
            {
                path: 'purchaseDetails',
                name: 'PurchaseDetails',
                component: () => import('@/views/purchase/purchaseDetails'),
                meta: { title: '采购明细', icon: 'tree' }
            },
            {
                path: 'purchaseSummary',
                name: 'PurchaseSummary',
                component: () => import('@/views/purchase/purchaseSummary'),
                meta: { title: '采购汇总', icon: 'tree' }
            },
            {
                path: 'supplierSettlement',
                name: 'SupplierSettlement',
                component: () => import('@/views/purchase/supplierSettlement'),
                meta: { title: '供应商结算', icon: 'tree' }
            }
        ]
    },

    {
        path: '/inventory',
        component: Layout,
        redirect: '/inventory/outInPutWarehouse',
        name: 'Inventory',
        meta: {
            title: '库存管理',
            icon: 'nested'
        },
        children: [
            {
                path: 'outInPutWarehouse',
                name: 'OutInPutWarehouse',
                component: () => import('@/views/inventory/inventoryOne/outInPutWarehouse'),
                meta: { title: '出入库明细', icon: 'tree' }
            },
            {
                path: 'stockInquiry',
                name: 'StockInquiry',
                component: () => import('@/views/inventory/inventoryOne/stockInquiry'),
                meta: { title: '库存查询', icon: 'tree' }
            },
            {
                path: 'allotApplyFor',
                name: 'AllotApplyFor',
                component: () => import('@/views/inventory/inventoryOne/allotApplyFor'),
                meta: { title: '调拨申请', icon: 'tree' }
            },
            {
                path: 'allotOutPut',
                name: 'AllotOutPut',
                component: () => import('@/views/inventory/inventoryOne/allotOutPut'),
                meta: { title: '调拨出库', icon: 'tree' }
            },
            {
                path: 'inventoryVerification',
                name: 'InventoryVerification',
                component: () => import('@/views/inventory/inventoryOne/inventoryVerification'),
                meta: { title: '库存盘点', icon: 'tree' }
            },
            {
                path: 'inventoryAdjustmentOrder',
                name: 'InventoryAdjustmentOrder',
                component: () => import('@/views/inventory/inventoryOne/inventoryAdjustmentOrder'),
                meta: { title: '库存调整单', icon: 'tree' }
            },
            {
                path: 'inventoryWarning',
                name: 'InventoryWarning',
                component: () => import('@/views/inventory/inventoryOne/inventoryWarning'),
                meta: { title: '库存预警', icon: 'tree' }
            },
            {
                path: 'check',
                component: () => import('@/views/inventory/check/index'), // Parent router-view
                name: 'Check',
                meta: { title: '盘点业务' },
                redirect: '/inventory/check/inventoryApplication',
                children: [
                    {
                        path: 'inventoryApplication',
                        component: () => import('@/views/inventory/check/inventoryApplication/index'),
                        name: 'InventoryApplication',
                        meta: { title: '盘点单申请' }
                    },
                    {
                        path: 'stocktaking',
                        component: () => import('@/views/inventory/check/stocktaking'),
                        name: 'Stocktaking',
                        meta: { title: '存货盘点' }
                    },
                    {
                        path: 'differences',
                        component: () => import('@/views/inventory/check/differences'),
                        name: 'Differences',
                        meta: { title: '差异处理' }
                    },
                    {
                        path: 'varianceReport',
                        component: () => import('@/views/inventory/check/varianceReport'),
                        name: 'VarianceReport',
                        meta: { title: '盘点差异报表' }
                    }
                ]
            }
        ]
    },

    {
        path: '/member',
        component: Layout,
        redirect: '/member/generalize',
        name: 'Member',
        meta: {
            title: 'Member会员管理',
            icon: 'nested'
        },
        children: [
            {
                path: 'generalize',
                name: 'Generalize',
                component: () => import('@/views/member/one/generalize'),
                meta: { title: '会员概括', icon: 'tree' }
            },
            {
                path: 'recordFile',
                name: 'RecordFile',
                component: () => import('@/views/member/one/recordFile'),
                meta: { title: '会员档案', icon: 'tree' }
            },
            {
                path: 'reconciliation',
                name: 'Reconciliation',
                component: () => import('@/views/member/one/reconciliation'),
                meta: { title: '会员对账', icon: 'tree' }
            },
            {
                path: 'statement',
                component: () => import('@/views/member/statement/index'),
                name: 'Statement',
                meta: { title: '会员报表', icon: 'tree' },
                redirect: '/member/statement/recharge',
                children: [
                    {
                        path: 'recharge',
                        component: () => import('@/views/member/statement/recharge'),
                        name: 'Recharge',
                        meta: { title: '充值报表' }
                    },
                    {
                        path: 'consumption',
                        component: () => import('@/views/member/statement/consumption'),
                        name: 'Consumption',
                        meta: { title: '消费报表' }
                    },
                    {
                        path: 'integral',
                        component: () => import('@/views/member/statement/integral'),
                        name: 'Integral',
                        meta: { title: '积分明细' }
                    },
                    {
                        path: 'conversion',
                        component: () => import('@/views/member/statement/conversion'),
                        name: 'Conversion',
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
                path: 'administrationManagement',
                name: 'AdministrationManagement',
                component: () => import('@/views/member/one/administrationManagement'),
                meta: { title: '会员卡管理', icon: 'tree' }
            },
            {
                path: 'rfm',
                name: 'RFM',
                component: () => import('@/views/member/one/rfm'),
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
