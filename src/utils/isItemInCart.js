export const IsItemInCart = (data,id) => {
    return data?.find(item => item._id === id) ? true : false;
}