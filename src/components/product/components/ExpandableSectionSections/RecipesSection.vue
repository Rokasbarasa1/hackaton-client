<template>
    <v-expansion-panel>
        <v-expansion-panel-header>Healthy recipes to do with this product</v-expansion-panel-header>
        <v-expansion-panel-content>
            <h1>{{title}} Recipes</h1>
            <ul>
                <li>
                    <h2>Chicken fajitas</h2>
                    <p>1/2 c. plus 1 tbsp. extra-virgin olive oil
                        1/4 c. lime juice, from about 3 limes
                        2 tsp. cumin
                        1/2 tsp. crushed red pepper flakes
                        1 lb. boneless skinless chicken breasts
                        Kosher salt
                        Freshly ground black pepper
                        2 bell peppers, thinly sliced
                        1 large onion, thinly sliced
                        Tortillas, for serving</p>
                </li>
                <li>
                    <h2>Chicken fried rice</h2>
                    <p>2 tablespoons sesame oil
                        2 tablespoons canola or vegetable oil
                        3/4 to 1 pound boneless skinless chicken breasts, diced into 1/2-inch pieces
                        1 1/2 cups frozen peas and diced carrots blend (I don’t thaw and use straight from the freezer)
                        3 green onions, trimmed and sliced into thin rounds
                        2 to 3 garlic cloves, finely minced
                        3 large eggs, lightly beaten
                        4 cups cooked rice (I use white, long-grain or brown may be substituted. To save time use two 8.8-ounce pouches cooked and ready-to-serve rice)
                        3 to 4 tablespoons low-sodium soy sauce
                        salt and pepper, optional and to taste</p>
                </li>
            </ul>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    export default {
        name: "RecipesSection",

        props: {
            title: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>