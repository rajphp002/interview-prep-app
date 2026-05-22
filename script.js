document.addEventListener("DOMContentLoaded", () => {
    // Application State Variables
    let selectedCategory = "all";
    let selectedLevel = "all";
    let searchQuery = "";
    let onlyBookmarks = false;

    // Local Storage Collections
    let completedQuestions = new Set(JSON.parse(localStorage.getItem("completedQuestions") || "[]"));
    let bookmarkedQuestions = new Set(JSON.parse(localStorage.getItem("bookmarked") || "[]"));

    // DOM Elements
    const searchInput = document.getElementById("search-input");
    const levelFilter = document.getElementById("level-filter");
    const bookmarkFilterBtn = document.getElementById("bookmark-filter-btn");
    const techCardsGrid = document.getElementById("tech-cards-grid");
    const questionsAccordionContainer = document.getElementById("questions-accordion-container");
    const questionsHeaderTitle = document.getElementById("questions-header-title");
    const questionsHeaderSubtitle = document.getElementById("questions-header-subtitle");
    const questionsCountBadge = document.getElementById("questions-count-badge");
    const clearFiltersBtn = document.getElementById("clear-filters-btn");
    
    // Progress UI Elements
    const progressPercent = document.getElementById("progress-percent");
    const progressText = document.getElementById("progress-text");
    const progressLineBar = document.getElementById("progress-line-bar");
    const progressCircleBar = document.getElementById("progress-circle-bar");
    const resetProgressBtn = document.getElementById("reset-progress-btn");
    const bookmarkCountIndicator = document.getElementById("bookmark-count");

    // Static Sections Containers
    const hrQuestionsContainer = document.getElementById("hr-questions-container");
    const tipsCardsContainer = document.getElementById("tips-cards-container");
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Initialize Application
    initApp();

    function initApp() {
        // Theme initialization
        initTheme();

        // Simulate a short loading delay for realistic app experience
        setTimeout(() => {
            renderTechCards();
            renderQuestions();
            renderHRQuestions();
            renderTips();
            updateProgressTracker();
        }, 600);

        // Set up event listeners
        setUpEventListeners();
    }

    // Set up Event Listeners
    function setUpEventListeners() {
        // Search bar inputs
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderQuestions();
            toggleClearFiltersBtn();
        });

        // Keyboard Shortcut: press '/' key to focus search bar
        window.addEventListener("keydown", (e) => {
            if (e.key === "/" && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        });

        // Difficulty dropdown selections
        levelFilter.addEventListener("change", (e) => {
            selectedLevel = e.target.value;
            renderQuestions();
            toggleClearFiltersBtn();
        });

        // Toggle bookmarks-only filter
        bookmarkFilterBtn.addEventListener("click", () => {
            onlyBookmarks = !onlyBookmarks;
            if (onlyBookmarks) {
                bookmarkFilterBtn.classList.add("bg-amber-500/15", "text-amber-600", "dark:text-amber-400", "border-amber-500/30");
                bookmarkFilterBtn.querySelector("i").classList.replace("fa-regular", "fa-solid");
            } else {
                bookmarkFilterBtn.classList.remove("bg-amber-500/15", "text-amber-600", "dark:text-amber-400", "border-amber-500/30");
                bookmarkFilterBtn.querySelector("i").classList.replace("fa-solid", "fa-regular");
            }
            renderQuestions();
            toggleClearFiltersBtn();
        });

        // Clear all filters button
        clearFiltersBtn.addEventListener("click", () => {
            selectedCategory = "all";
            selectedLevel = "all";
            searchQuery = "";
            onlyBookmarks = false;

            searchInput.value = "";
            levelFilter.value = "all";

            // Reset bookmarks filter button
            bookmarkFilterBtn.classList.remove("bg-amber-500/15", "text-amber-600", "dark:text-amber-400", "border-amber-500/30");
            bookmarkFilterBtn.querySelector("i").classList.replace("fa-solid", "fa-regular");

            // Update UI elements
            renderTechCards();
            renderQuestions();
            toggleClearFiltersBtn();
        });

        // Reset progress tracker button
        resetProgressBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset your progress tracker and bookmarks?")) {
                completedQuestions.clear();
                bookmarkedQuestions.clear();
                localStorage.removeItem("completedQuestions");
                localStorage.removeItem("bookmarked");

                updateProgressTracker();
                renderQuestions();
                renderTechCards();
                showToast("fa-solid fa-trash text-rose-500", "All progress has been reset.");
            }
        });

        // Theme toggle button
        themeToggleBtn.addEventListener("click", toggleTheme);
    }

    // Initialize Theme setup from local storage or system preference
    function initTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            themeIcon.className = "fa-solid fa-sun text-amber-500";
        } else {
            document.documentElement.classList.remove("dark");
            themeIcon.className = "fa-solid fa-moon";
        }
    }

    // Toggle Light and Dark Mode
    function toggleTheme() {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            themeIcon.className = "fa-solid fa-moon";
            localStorage.setItem("theme", "light");
            showToast("fa-solid fa-sun text-amber-500", "Switched to Light Mode");
        } else {
            document.documentElement.classList.add("dark");
            themeIcon.className = "fa-solid fa-sun text-amber-500";
            localStorage.setItem("theme", "dark");
            showToast("fa-solid fa-moon text-indigo-500", "Switched to Dark Mode");
        }
    }

    // Show or hide clear filters button dynamically
    function toggleClearFiltersBtn() {
        if (selectedCategory !== "all" || selectedLevel !== "all" || searchQuery !== "" || onlyBookmarks) {
            clearFiltersBtn.classList.remove("hidden");
        } else {
            clearFiltersBtn.classList.add("hidden");
        }
    }

    // Render Technology Selection cards dynamically
    function renderTechCards() {
        techCardsGrid.innerHTML = "";

        interviewData.technologies.forEach(tech => {
            // Count total and completed questions for this category
            const totalQuestions = tech.questions.length;
            const completedCount = tech.questions.filter(q => completedQuestions.has(q.id)).length;
            const progressPct = totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

            const isSelected = selectedCategory === tech.id;
            const selectedCardStyles = isSelected 
                ? "ring-2 ring-brand-500 border-brand-500 scale-102 bg-white dark:bg-darkCard shadow-lg" 
                : "border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard hover:shadow-lg";

            const card = document.createElement("div");
            card.className = `interactive-card flex flex-col justify-between p-6 rounded-3xl border ${selectedCardStyles} cursor-pointer transition-all duration-300`;
            card.innerHTML = `
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="h-12 w-12 rounded-2xl bg-gradient-to-tr ${tech.color} flex items-center justify-center text-white text-xl shadow-md shadow-brand-500/5">
                            <i class="${tech.icon}"></i>
                        </div>
                        <span class="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                            ${completedCount}/${totalQuestions} Done
                        </span>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg group-hover:text-brand-500 transition-colors">${tech.title}</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${tech.description}</p>
                    </div>
                </div>
                
                <!-- Inner progress slider -->
                <div class="mt-5 pt-3 border-t border-slate-100 dark:border-darkBorder/40">
                    <div class="flex items-center justify-between text-xs font-semibold mb-1">
                        <span class="text-slate-400 dark:text-slate-500">Mastery</span>
                        <span class="text-brand-500">${progressPct}%</span>
                    </div>
                    <div class="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r ${tech.color} rounded-full" style="width: ${progressPct}%"></div>
                    </div>
                </div>
            `;

            // Click event to activate category filter
            card.addEventListener("click", () => {
                if (selectedCategory === tech.id) {
                    selectedCategory = "all"; // Toggle off
                } else {
                    selectedCategory = tech.id;
                }
                renderTechCards();
                renderQuestions();
                toggleClearFiltersBtn();

                // Smooth scroll to questions container on selection
                document.getElementById("questions-section").scrollIntoView({ behavior: "smooth" });
            });

            techCardsGrid.appendChild(card);
        });
    }

    // Render filtered Questions and Accordion layout
    function renderQuestions() {
        questionsAccordionContainer.innerHTML = "";

        // Collect all questions across active categories
        let matchedQuestions = [];

        interviewData.technologies.forEach(tech => {
            if (selectedCategory === "all" || selectedCategory === tech.id) {
                tech.questions.forEach(q => {
                    matchedQuestions.push({
                        ...q,
                        techId: tech.id,
                        techTitle: tech.title,
                        techColor: tech.color
                    });
                });
            }
        });

        // Filter by difficulty level
        if (selectedLevel !== "all") {
            matchedQuestions = matchedQuestions.filter(q => q.level === selectedLevel);
        }

        // Filter by bookmarks
        if (onlyBookmarks) {
            matchedQuestions = matchedQuestions.filter(q => bookmarkedQuestions.has(q.id));
        }

        // Filter by search text query
        if (searchQuery !== "") {
            matchedQuestions = matchedQuestions.filter(q => 
                q.question.toLowerCase().includes(searchQuery) || 
                q.answer.toLowerCase().includes(searchQuery)
            );
        }

        // Update headers and search stats UI
        updateQuestionsHeader(matchedQuestions.length);

        if (matchedQuestions.length === 0) {
            // Render beautiful empty state
            questionsAccordionContainer.innerHTML = `
                <div class="flex flex-col items-center justify-center py-16 px-4 text-center">
                    <div class="h-16 w-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mb-4 text-2xl">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h4 class="text-lg font-bold">No Questions Match Your Filters</h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 max-w-sm mt-1">Try relaxing your search terms, switching levels, or changing category criteria.</p>
                </div>
            `;
            return;
        }

        // Generate and append matching elements
        matchedQuestions.forEach(q => {
            const isCompleted = completedQuestions.has(q.id);
            const isBookmarked = bookmarkedQuestions.has(q.id);

            // Determine level badge coloring classes
            let levelBadgeStyle = "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
            if (q.level === "Intermediate") levelBadgeStyle = "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20";
            if (q.level === "Advanced") levelBadgeStyle = "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20";

            const item = document.createElement("div");
            item.className = `transition-all duration-300 border-l-4 ${isCompleted ? "border-l-emerald-500" : "border-l-transparent"}`;
            item.innerHTML = `
                <div class="p-5 sm:p-6 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition-colors cursor-pointer flex gap-4 items-start select-none" data-accordion-header>
                    
                    <!-- Completed Toggle Checkbox -->
                    <button class="complete-checkbox-btn mt-0.5 h-6 w-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isCompleted ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300 dark:border-darkBorder hover:border-brand-500"}" data-id="${q.id}">
                        <i class="fa-solid fa-check text-xs ${isCompleted ? "" : "opacity-0"}"></i>
                    </button>

                    <!-- Main metadata / Question header content -->
                    <div class="flex-1 space-y-2">
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${q.techColor} text-white">${q.techTitle}</span>
                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-md ${levelBadgeStyle}">${q.level}</span>
                        </div>
                        <h4 class="font-semibold text-sm sm:text-base pr-4">${q.question}</h4>
                    </div>

                    <!-- Actions Panel (Bookmark & Expand Arrow) -->
                    <div class="flex items-center gap-2 flex-shrink-0">
                        <button class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200" data-id="${q.id}">
                            <i class="${isBookmarked ? "fa-solid fa-star text-amber-500" : "fa-regular fa-star"}"></i>
                        </button>
                        <i class="fa-solid fa-chevron-down text-slate-400 transform transition-transform duration-300 pointer-events-none" data-arrow></i>
                    </div>
                </div>

                <!-- Accordion Expandable panel containing answers -->
                <div class="accordion-content bg-slate-50/50 dark:bg-slate-900/20 px-5 sm:px-6 border-t border-slate-100 dark:border-darkBorder/40">
                    <div class="py-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-4">
                        <div class="prose max-w-none">
                            ${q.answer}
                        </div>
                    </div>
                </div>
            `;

            // Event handler for opening/closing accordion body panels
            const header = item.querySelector("[data-accordion-header]");
            const content = item.querySelector(".accordion-content");
            const arrow = item.querySelector("[data-arrow]");

            header.addEventListener("click", (e) => {
                // Ignore general click if user clicked actionable buttons
                if (e.target.closest(".complete-checkbox-btn") || e.target.closest(".bookmark-btn")) return;

                const isOpen = content.classList.contains("open");
                
                // Toggle state
                if (isOpen) {
                    content.classList.remove("open");
                    arrow.classList.remove("rotate-180");
                } else {
                    content.classList.add("open");
                    arrow.classList.add("rotate-180");
                }
            });

            // Action: Complete Toggle Action
            const completeBtn = item.querySelector(".complete-checkbox-btn");
            completeBtn.addEventListener("click", () => toggleComplete(q.id));

            // Action: Bookmark Toggle Action
            const bookmarkBtn = item.querySelector(".bookmark-btn");
            bookmarkBtn.addEventListener("click", () => toggleBookmark(q.id));

            questionsAccordionContainer.appendChild(item);
        });
    }

    // Update dynamically generated counts and labels above accordion
    function updateQuestionsHeader(count) {
        questionsCountBadge.textContent = `${count} Question${count !== 1 ? "s" : ""}`;

        if (selectedCategory !== "all") {
            const currentTech = interviewData.technologies.find(t => t.id === selectedCategory);
            questionsHeaderTitle.textContent = `${currentTech.title} Preparation`;
            questionsHeaderSubtitle.textContent = `Displaying matched interview questions for ${currentTech.title}`;
        } else {
            questionsHeaderTitle.textContent = "All Tech Questions";
            questionsHeaderSubtitle.textContent = "Browse and search through all 100+ combined questions and scenarios.";
        }
    }

    // Toggle Complete Action handler
    function toggleComplete(id) {
        if (completedQuestions.has(id)) {
            completedQuestions.delete(id);
            showToast("fa-solid fa-circle-xmark text-slate-400", "Removed from completed.");
        } else {
            completedQuestions.add(id);
            showToast("fa-solid fa-circle-check text-emerald-500", "Marked question as completed!");
        }

        localStorage.setItem("completedQuestions", JSON.stringify(Array.from(completedQuestions)));
        updateProgressTracker();
        renderQuestions();
        renderTechCards();
    }

    // Toggle Bookmark Action handler
    function toggleBookmark(id) {
        if (bookmarkedQuestions.has(id)) {
            bookmarkedQuestions.delete(id);
            showToast("fa-solid fa-star-half text-slate-400", "Removed bookmark.");
        } else {
            bookmarkedQuestions.add(id);
            showToast("fa-solid fa-star text-amber-500", "Added to your Saved Bookmarks.");
        }

        localStorage.setItem("bookmarked", JSON.stringify(Array.from(bookmarkedQuestions)));
        updateProgressTracker();
        renderQuestions();
    }

    // Recalculate progress values across the platform
    function updateProgressTracker() {
        // Collect entire count of platform questions
        let totalCount = 0;
        interviewData.technologies.forEach(tech => {
            totalCount += tech.questions.length;
        });

        const completedCount = completedQuestions.size;
        const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

        // Sync text labels
        progressPercent.textContent = `${percent}%`;
        progressText.textContent = `${completedCount} / ${totalCount}`;

        // Update linear progress bar width
        progressLineBar.style.width = `${percent}%`;

        // Update circular progress ring
        // Circumference is 2 * PI * R where R=48, equals ~301.6
        const circumference = 301.6;
        const offset = circumference - (percent / 100) * circumference;
        progressCircleBar.style.strokeDashoffset = offset;

        // Update bookmarks counters in toolbar
        bookmarkCountIndicator.textContent = bookmarkedQuestions.size;
    }

    // Render HR Behavior Prep questions static grid
    function renderHRQuestions() {
        hrQuestionsContainer.innerHTML = "";

        interviewData.hrQuestions.forEach(hr => {
            const card = document.createElement("div");
            card.className = "bg-white dark:bg-darkCard p-6 rounded-2xl border border-slate-200 dark:border-darkBorder space-y-4 hover:shadow-md transition-shadow";
            card.innerHTML = `
                <div class="flex gap-3.5">
                    <div class="h-9 w-9 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center flex-shrink-0">
                        <i class="fa-solid fa-circle-question"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-base text-slate-800 dark:text-slate-100">${hr.question}</h4>
                        <div class="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-indigo-500/30 pl-3.5 italic bg-slate-50/50 dark:bg-slate-900/30 py-2 rounded-r-xl">
                            ${hr.answer}
                        </div>
                    </div>
                </div>
            `;
            hrQuestionsContainer.appendChild(card);
        });
    }

    // Render static prep tips cards
    function renderTips() {
        tipsCardsContainer.innerHTML = "";

        interviewData.tips.forEach(tip => {
            const card = document.createElement("div");
            card.className = "bg-white dark:bg-darkCard p-6 rounded-2xl border border-slate-200 dark:border-darkBorder flex items-start gap-4 hover:shadow-md transition-shadow";
            card.innerHTML = `
                <div class="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg flex-shrink-0">
                    <i class="${tip.icon}"></i>
                </div>
                <div>
                    <h4 class="font-bold text-base mb-1">${tip.title}</h4>
                    <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">${tip.desc}</p>
                </div>
            `;
            tipsCardsContainer.appendChild(card);
        });
    }

    // Display alert dialog confirmation notifications
    function showToast(iconClass, message) {
        const toast = document.getElementById("toast");
        const toastIcon = document.getElementById("toast-icon");
        const toastMessage = document.getElementById("toast-message");

        // Inject dynamic values
        toastIcon.className = iconClass;
        toastMessage.textContent = message;

        // Clear previous animations if active
        toast.classList.remove("opacity-0", "translate-y-24");
        toast.classList.add("opacity-100", "translate-y-0");

        // Hide notification safely
        setTimeout(() => {
            toast.classList.remove("opacity-100", "translate-y-0");
            toast.classList.add("opacity-0", "translate-y-24");
        }, 2500);
    }
});