import { postReedem } from "../api/service";

export const redeemProduct = (user, setUser, points, productCost, productId ) => {
    const refreshPoints = points - productCost
    setUser({ ...user, points: refreshPoints });
    postReedem( productId );
};
