document
     .querySelector("#helpButton")
     .addEventListener("click", function () {

                    document
                    .querySelector("#result")
                    .setAttribute(
                "value",
                "you chose to help the injured man. the good samaritan showed kindess."
        );

    });

    document
          .querySelector("#walkbutton")
          .addEventListener("click", function () {

            document
            .querySelector("#result")
            .setAttribute(
                "value",
                "you chose to walk away. in the parble,others did this befor the samaritan helped."
        );

    });

    