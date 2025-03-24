function main() {
  const categoryOfItem = readLine();
  const item = readLine();

  const mart = [
    {
      category: "pulses",
      items: ["green gram", "green peas", "Turkish gram"]
    },
    {
      category: "soaps",
      items: ["santoor", "dove", "lux", "pears"]
    },
    {
      category: "oil",
      items: ["sunflower oil", "grapeseed oil", "soybean oil"]
    },
    {
      category: "cereals",
      items: ["wheat", "rice", "maize", "oat"]
    },
    {
      category: "spices",
      items: ["cumin", "coriander", "black pepper", "clove"]
    }
  ];

  /* Write your code here */
  function searchItemInMart(categoryOfItem, item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const category = mart.find(obj => obj.category === categoryOfItem);

        if (category) {
          if (category.items.includes(item)) {
            resolve("Item Found");
          } else {
            reject("Item Not Found");
          }
        } else {
          reject("Category Not Found");
        }
      }, 1000);
    });
  }

  async function searchItem() {
    try {
      const result = await searchItemInMart(categoryOfItem, item);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  searchItem();
}
