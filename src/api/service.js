// base url API
const BASE_URL = 'https://coding-challenge-api.aerolab.co';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZlMjZiYjc2NmZiNTAwMjRhYTg3OGUiLCJpYXQiOjE2MTc4MzE2MTF9.OMCBuUUBauP9nl7KbToJf30FctH5NPJPz6opx4ZFQv0';

// endpoints
const GET_USER = `${ BASE_URL }/user/me`;
const GET_PRODUCTS = `${ BASE_URL }/products`;
const POST_POINTS = `${ BASE_URL }/user/points`;
const GET_REDEEM = `${ BASE_URL }/redeem`;
const GET_HISTORY = `${ BASE_URL }/user/history`;

// headers
const headers = new Headers();
headers.append( 'Content-Type', 'application/json' );
headers.append( 'Accept', 'application/json' );
headers.append( 'Authorization', `Bearer ${TOKEN}` );

export const getUser = async ( setUser ) => {

    const parameters = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    try {
        const result = await fetch(GET_USER, parameters);
        const data = await result.json();
    
        setUser( data );
    } catch (error) {
        console.log('error user', error);
    }
};

export const getProducts = async() => {

    const parameters = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    try {
        const result = await fetch(GET_PRODUCTS, parameters);
        const data = await result.json();
    
        const products = data.map( product => {
            return {
                id: product._id,
                name: product.name,
                cost: product.cost,
                category: product.category,
                img: product.img?.url
            }
        });
        return products;
    } catch (error) {
        console.log('error products', error);
    }
};

export const postPoints = async ( amount, userPoints, setUserPoints ) => {

    const param = JSON.stringify({ amount: amount });
    const parameters = {
        method: 'POST',
        headers: headers,
        body: param,
        redirect: 'follow'
    };

    try {
        const result = await fetch(POST_POINTS, parameters);
        const data = await result.json();

        const newPointsState = { ...userPoints };
        newPointsState.points = data['New Points'];
        setUserPoints(newPointsState);
    } catch (error) {
        console.log('error post points', error);
    }
};

export const getReedem = async (productId) => {

    const param = JSON.stringify( { productId : productId } );
    const parameters = {
        method: 'POST',
        headers: headers,
        body: param,
        redirect: 'follow'
    };

    try {
        await fetch(GET_REDEEM, parameters);
        return true;
    } catch (error) {
        console.log('error get redeems', error);
        return false;
    }
};

export const getHistory = async (setRedeemData) => {

    const parameters = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    try {
        const result = await fetch(GET_HISTORY, parameters);
        const products = await result.json();
        setRedeemData(products);
    } catch (error) {
        console.log('error get history', error);
    }
};

    

