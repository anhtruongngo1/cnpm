import * as httpRequest from '~/components//ultils/httpRequest';

export const handleLogin = async (q, type = 'less') =>{
    try {
        const res = await  httpRequest.get('accounts'
        // {
        //     params:{
        //         q ,
        //         type ,
        //     }

        // }
        );

        return res

        
    } catch (error) {
            console.log(error);
    }
}
export const handleRegister = async (data) =>{
    try {
        const res = await  httpRequest.post('accounts',
        {
           username : data.username ,
           email : data.email ,
           password : data.password

        }
        );

        return res

        
    } catch (error) {
            console.log(error);
    }
}
export const handleUpdateOrder = async (data) =>{
    try {
        const res = await  httpRequest.post('order',
        {
            infor : data.fullname ,
            address : data.address ,
            status : data.status ,
            price : data.price ,
            sdt : data.sdt

        }
        );

        return res

        
    } catch (error) {
            console.log(error);
    }
}
export const handleAllUser = async (data) =>{
    try {
        const res = await  httpRequest.get('accounts'
        // {
        //     params:{
        //         q ,
        //         type ,
        //     }

        // }
        );
        
        return res

        
    } catch (error) {
            console.log(error);
    }
}
export const handleAllProduct = async (data) =>{
    try {
        const res = await  httpRequest.get('products'
        // {
        //     params:{
        //         q ,
        //         type ,
        //     }

        // }
        );
        
        return res

        
    } catch (error) {
            console.log(error);
    }
}
export const handleAddProduct = async (data) =>{
    try {
        const res = await  httpRequest.post('products',
        {
            name : data.name ,
            category : data.category ,
            price : data.price ,
            image : data.image ,
            description : data.description

        }
        );
        
        return res

        
    } catch (error) {
            console.log(error);
    }
}
export const handleCategory = async (data) =>{
    try {
        const res = await  httpRequest.get('category'
        );
        
        return res

        
    } catch (error) {
            console.log(error);
    }
}
export const handleOrder = async (data) =>{
    try {
        const res = await  httpRequest.get('order'
        );
        
        return res

        
    } catch (error) {
            console.log(error);
    }
}
export const handleDeleteUser = async (id) =>{
    try {
        const res = await  httpRequest.get2('accounts/',{
            
                    params:{
                        
                        
                    }
        
                }

        
        );
        
        return res

        
    } catch (error) {
            console.log(error);
    }
}