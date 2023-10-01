export const API = (url) => {
    return fetch(url, {
        method: "GET",
        headers: {
            "X-Master-Key": "$2a$10$n13rXxvS2iHyPtkOKIkxXedenihSHXBowwgKINhdnMvDzm32QLS/.",
            "Content-Type": "application/json"
        },
    }).then((response) => response.json())
};

