import { PRODUCTCATEGORY } from "../graphql/query";
import { MATERIALMASTER,ORDERS } from "../services/queries";

export const productCategory = {
    query: PRODUCTCATEGORY,
    mapper: (response) => {
        const masterevents = response.masterevents.map(_ => ({
            ..._,
            value: _.id,
            label: _.name
        }))
        const masterdepartments = response.masterdepartments.map(_ => ({
            ..._,
            value: _.id,
            label: _.name
        }))
        const masterparticipants = response.masterparticipants.map(_ => ({
            ..._,
            value: _.id,
            label: _.name
        }))
     
        
        
        return { 
            masterevents,
            masterdepartments,
            masterparticipants
        }
    }
}

export const orderList = {
    query: ORDERS,
    mapper: (response) => {
        const orders = response.allOrders.nodes.map(_ => ({
            ..._,
            ipgid: JSON.parse(_.paymentDetailsByOrderId.nodes[0])
                }))
                if(orders.length > 0)
                {
                    alert(JSON.stringify(orders[0].ipgid))

                }
        return {
            orders
        }
    }
}
export const materialMaster = {
    query: MATERIALMASTER,
    mapper: (response) => {
        const materials = response.allMasterMaterials.nodes.map(_ => ({
            ..._
                }))
        const vendors = response.allMasterVendors.nodes.map(_ => ({
                    ..._
        }))

        const product_categories = response.allMasterProductCategories.nodes.map(_ => ({
            ..._
        }))
        const product_types = response.allMasterProductTypes.nodes.map(_ => ({
            ..._
        }))
        
        return {
            vendors,
            product_categories,
            product_types,
            materials
        }
    }


}