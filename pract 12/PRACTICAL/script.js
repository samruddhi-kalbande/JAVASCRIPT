
$(document).ready(function () {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function displayTasks() {
        $("#taskList").empty();

        tasks.forEach(function (task) {
            const li = $("<li>");
            const text = $("<span>").text(task.name);

            if (task.completed) {
                text.addClass("done");
            }

            const completeBtn = $("<button>")
                .text(task.completed ? "Undo" : "Complete")
                .addClass("complete");

            const deleteBtn = $("<button>")
                .text("Delete")
                .addClass("delete");

            li.append(text, completeBtn, deleteBtn);
            li.attr("data-id", task.id);
            $("#taskList").append(li);
        });

        $("#total").text(tasks.length);
        $("#completed").text(
            tasks.filter(task => task.completed).length
        );

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    $("#taskForm").on("submit", function (event) {
        event.preventDefault();

        const name = $("#taskInput").val().trim();

        if (name !== "") {
            tasks.push({
                id: Date.now(),
                name: name,
                completed: false
            });

            $("#taskInput").val("");
            displayTasks();
        }
    });

    $("#taskList").on("click", ".complete", function () {
        const id = Number($(this).closest("li").attr("data-id"));

        tasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });

        displayTasks();
    });

    $("#taskList").on("click", ".delete", function () {
        const id = Number($(this).closest("li").attr("data-id"));

        tasks = tasks.filter(task => task.id !== id);

        displayTasks();
    });

    function updateClock() {
        $("#clock").text("Current Time: " + new Date().toLocaleTimeString("en-US"));
    }

    updateClock();
    setInterval(updateClock, 1000);

    $("#loadPosts").on("click", function () {
        $("#status").text("Loading posts...");
        $("#posts").empty();

        $.ajax({
            url: "https://dummyjson.com/posts?limit=5",
            method: "GET",
            dataType: "json",

            success: function (data) {
                $("#status").text("English sample posts loaded successfully!");

                data.posts.forEach(function (post) {
                    const div = $("<div>").addClass("post");
                    $("<h3>").text(post.title).appendTo(div);
                    $("<p>").text(post.body).appendTo(div);
                    $("#posts").append(div);
                });
            },

            error: function () {
                $("#status").text("Unable to load posts. Check your internet connection.");
            }
        });
    });

    displayTasks();

});
