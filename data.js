const interviewData = {
    technologies: [
        {
            id: "java",
            title: "Java Interview",
            icon: "fa-brands fa-java",
            description: "Master OOP, Threading, Collections, JVM performance, Memory profiling, and Functional elements.",
            color: "from-amber-600 to-orange-500",
            questions: [
                {
                    id: "java-q1",
                    question: "What are the core features of OOPs in Java?",
                    answer: "The fundamental Principles of OOP (Object Oriented Programming) in Java are:\n\n1. <b>Inheritance:</b> Acquiring properties and behavior of a parent class. Managed via <code>extends</code>.\n2. <b>Polymorphism:</b> One action executing differently based on object instances. Supported dynamically via method overriding, and statically via overloading.\n3. <b>Encapsulation:</b> Hiding properties using private variable status and revealing them through public getters/setters.\n4. <b>Abstraction:</b> Showing essential capabilities while shielding low-level complexity. Handled via <code>interfaces</code> and <code>abstract classes</code>.",
                    level: "Beginner"
                },
                {
                    id: "java-q2",
                    question: "What is the difference between JRE, JDK, and JVM?",
                    answer: "<ul><li><b>JVM (Java Virtual Machine):</b> The heart of Java runtime compilation. Translates compiled bytecode into native processor operations.</li><li><b>JRE (Java Runtime Environment):</b> Consists of the JVM and critical libraries required to launch programs, but lacks compiler options.</li><li><b>JDK (Java Development Kit):</b> A comprehensive development package that houses both JRE and software design assets like the compiler (<code>javac</code>).</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "java-q3",
                    question: "How does String Pool work in Java memory management?",
                    answer: "The String Pool is a specific cache in heap allocation where string literals are stored.\n\n- Declaring strings like <code>String str = \"Test\";</code> checks the pool. If located, it links directly to that memory reference. If not, it adds it.\n- Allocating via <code>new String(\"Test\")</code> allocates entirely distinct objects on standard heap areas regardless of existing pool status.\n- The function <code>intern()</code> forces Java to store or link a string from the String Pool.",
                    level: "Intermediate"
                },
                {
                    id: "java-q4",
                    question: "What is the difference between ArrayList and LinkedList?",
                    answer: "<ul><li><b>ArrayList:</b> Powered by resizable arrays. Provides quick constant-time indexed search (<code>O(1)</code>). Appending elements is fast (<code>O(1)</code> amortized) but inserts/removes inside middle indexes scale to <code>O(N)</code>.</li><li><b>LinkedList:</b> Composed of linked nodes. Fast sequential element inserts and removes at exact index pointers (<code>O(1)</code>). Search performance degrades because traversal takes linear <code>O(N)</code> time.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "java-q5",
                    question: "How does HashMap calculate indexes, and how are collisions handled?",
                    answer: "HashMap utilizes hashing techniques to map keys into indexes:\n\n1. It calculates the hashcode using the key's <code>hashCode()</code> method and performs internal bit-shifting to fit table dimensions.\n2. When matching indexes are calculated for multiple keys (Collision), elements are bucketed.\n3. Java 8 optimizes bucket traversal. If elements in a bucket exceed a threshold of 8, the storage structures upgrade from a LinkedList to a Balanced Red-Black Tree, dropping lookup complexities from <code>O(N)</code> to <code>O(log N)</code>.",
                    level: "Advanced"
                },
                {
                    id: "java-q6",
                    question: "Explain the contract between equals() and hashCode() methods.",
                    answer: "If two objects are equal based on <code>equals(Object)</code> logic, they <b>must</b> produce identical integer values from <code>hashCode()</code>. However, the inverse is not required: two unequal objects can share the same hashcode (a collision). Overriding one without the other can break collections like HashMaps and HashSets, causing duplicates or data lookup failures.",
                    level: "Intermediate"
                },
                {
                    id: "java-q7",
                    question: "What are the ways to spawn a Thread in Java?",
                    answer: "Threads can be generated in multiple ways:\n\n1. Extending the <code>Thread</code> class: \n<pre>class MyThread extends Thread { public void run() { ... } }</pre>\n2. Implementing <code>Runnable</code>: \n<pre>Runnable r = () -> { ... }; Thread t = new Thread(r); t.start();</pre>\n3. Using the <code>Callable</code> interface with an <code>ExecutorService</code> (which allows returning a <code>Future</code> object and throwing checked exceptions).",
                    level: "Beginner"
                },
                {
                    id: "java-q8",
                    question: "What does the volatile keyword do in multi-threading?",
                    answer: "The <code>volatile</code> keyword ensures thread visibility. Each read/write of a volatile field bypasses local CPU caches and happens directly in the shared main memory, ensuring all threads see real-time updates. It also prevents instruction reordering by compiler optimizations, but it <b>does not</b> guarantee atomic executions (synchronized blocks are needed for atomicity).",
                    level: "Intermediate"
                },
                {
                    id: "java-q9",
                    question: "How does Garbage Collection operate in Java?",
                    answer: "Garbage Collection (GC) automatically frees up memory by removing unreferenced objects on the heap. Modern JVMs categorize memory into areas:\n\n- <b>Young Generation:</b> For short-lived objects. Includes Eden and Survivor spaces. Minor GCs run frequently here.\n- <b>Old Generation:</b> For long-lived objects. Major GCs (Full GC) clean this area and can trigger short pauses. Algorithms like G1 (Garbage-First) and ZGC minimize these application pauses.",
                    level: "Advanced"
                },
                {
                    id: "java-q10",
                    question: "What is the difference between final, finally, and finalize?",
                    answer: "<ul><li><b>final:</b> A modifier used to make variables constant (immutable), prevent methods from being overridden, or stop classes from being inherited.</li><li><b>finally:</b> A block used in <code>try-catch-finally</code> exceptions handling to guarantee the execution of cleanup code (like closing streams), regardless of whether an exception is thrown.</li><li><b>finalize:</b> A deprecated garbage collection hook method invoked on objects before they are collected (strongly discouraged for production cleanup).</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "java-q11",
                    question: "What is the difference between abstract classes and interfaces in Java 8?",
                    answer: "<ul><li><b>Abstract Class:</b> Can declare instance fields, define constructors, and manage state. Allows single inheritance only.</li><li><b>Interface:</b> Primarily models contract behaviors (multiple inheritance is supported). Since Java 8, interfaces can contain implementation code via <code>default</code> and <code>static</code> methods, and Java 9 added <code>private</code> methods. They cannot declare instance state fields (only static final constants).</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "java-q12",
                    question: "How do Java 8 Streams work?",
                    answer: "A Stream is a pipeline of computational steps for processing data collections declaratively. It consists of:\n\n1. <b>Source:</b> (e.g., <code>List.stream()</code>).\n2. <b>Intermediate Operations:</b> Return a new stream and evaluate lazily (e.g., <code>filter()</code>, <code>map()</code>, <code>sorted()</code>).\n3. <b>Terminal Operations:</b> Trigger execution and return concrete results or side-effects (e.g., <code>collect()</code>, <code>forEach()</code>, <code>reduce()</code>). Once consumed, streams cannot be reused.",
                    level: "Intermediate"
                },
                {
                    id: "java-q13",
                    question: "Describe the Checked and Unchecked Exceptions hierarchy.",
                    answer: "All exceptions descend from <code>Throwable</code>:\n\n- <b>Checked Exceptions:</b> Subclasses of <code>Exception</code> (excluding RuntimeException). Verified at compile-time (e.g., <code>IOException</code>). The developer must handle them with a try-catch block or declare them with a <code>throws</code> clause.\n- <b>Unchecked Exceptions:</b> Subclasses of <code>RuntimeException</code>. Validated at runtime (e.g., <code>NullPointerException</code>). They are typically caused by programming logic errors and do not require mandatory compile-time handling.",
                    level: "Beginner"
                },
                {
                    id: "java-q14",
                    question: "What is a Functional Interface, and how does it relate to lambdas?",
                    answer: "A Functional Interface contains exactly <b>one abstract method</b> (though it can have multiple default or static methods) and is annotated with <code>@FunctionalInterface</code>. Lambda expressions supply inline implementations for this single abstract method, making functional programming more readable by avoiding verbose anonymous classes.",
                    level: "Intermediate"
                },
                {
                    id: "java-q15",
                    question: "How can memory leaks occur in Java, despite automatic garbage collection?",
                    answer: "Memory leaks happen when unused objects are kept in memory because they are still referenced by active objects. Common causes include:\n\n- Static fields referencing large objects or collections indefinitely.\n- Failing to close resources, such as system streams, DB connections, or sockets.\n- Unclosed thread pools or active <code>ThreadLocal</code> variables that are not cleared.\n- Adding items to hash collections without overriding <code>equals()</code> and <code>hashCode()</code>, causing duplicates that cannot be removed.",
                    level: "Advanced"
                },
                {
                    id: "java-q16",
                    question: "What is the difference between == and .equals()?",
                    answer: "<code>==</code> is a comparison operator that evaluates primitive values or checks memory reference equality for objects. <code>.equals()</code> is a class method that can be overridden to compare the actual contents or logical states of two objects.",
                    level: "Beginner"
                },
                {
                    id: "java-q17",
                    question: "What is the difference between StringBuilder and StringBuffer?",
                    answer: "Both represent mutable sequences of characters. However, <code>StringBuffer</code> is thread-safe due to synchronized methods, making it slower, whereas <code>StringBuilder</code> is unsynchronized, making it faster and preferred for single-threaded executions.",
                    level: "Beginner"
                },
                {
                    id: "java-q18",
                    question: "What is a deadlock and how can it be prevented?",
                    answer: "A deadlock happens when two or more threads are permanently blocked, each waiting for a lock held by the other. It can be prevented by acquiring locks in a consistent order, using timeouts (like <code>tryLock()</code> in <code>ReentrantLock</code>), or minimizing nested lock scopes.",
                    level: "Advanced"
                },
                {
                    id: "java-q19",
                    question: "Explain the try-with-resources statement in Java.",
                    answer: "Introduced in Java 7, <code>try-with-resources</code> is a try block that declares one or more resources that implement the <code>AutoCloseable</code> interface. It guarantees that each resource is closed automatically at the end of the block, preventing resource leaks.",
                    level: "Intermediate"
                },
                {
                    id: "java-q20",
                    question: "What is the difference between Comparable and Comparator?",
                    answer: "<ul><li><b>Comparable:</b> Implemented by a class to define its natural ordering via the <code>compareTo()</code> method.</li><li><b>Comparator:</b> A separate functional interface used to define custom sorting orders via the <code>compare()</code> method without changing the original class.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "java-q21",
                    question: "What is the Optional class and why was it introduced?",
                    answer: "Introduced in Java 8, <code>Optional&lt;T&gt;</code> is a wrapper object that may or may not contain a non-null value. It was introduced to reduce <code>NullPointerException</code> crashes and design clearer API structures where missing values are expected.",
                    level: "Intermediate"
                },
                {
                    id: "java-q22",
                    question: "What are default methods in interfaces?",
                    answer: "Introduced in Java 8, default methods use the <code>default</code> keyword to provide concrete code implementations inside interfaces. This allows developers to add new methods to interfaces without breaking older classes that implement them.",
                    level: "Beginner"
                },
                {
                    id: "java-q23",
                    question: "What is the difference between fail-fast and fail-safe iterators?",
                    answer: "<ul><li><b>Fail-Fast:</b> Throws a <code>ConcurrentModificationException</code> if the underlying collection is modified during iteration (e.g., <code>ArrayList</code> iterator).</li><li><b>Fail-Safe (Weakly Consistent):</b> Iterates on a clone or a copy of the collection, allowing structural changes without throwing errors (e.g., <code>CopyOnWriteArrayList</code> iterator).</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "java-q24",
                    question: "What is the purpose of the transient keyword?",
                    answer: "The <code>transient</code> keyword is used to mark a variable so that it will not be serialized. When the host object is converted into a byte stream, transient fields are ignored and recover their default values upon deserialization.",
                    level: "Intermediate"
                },
                {
                    id: "java-q25",
                    question: "Explain the difference between HashMap and ConcurrentHashMap.",
                    answer: "<code>HashMap</code> is not synchronized and is unsafe for multi-threaded processes. <code>ConcurrentHashMap</code> is thread-safe and highly concurrent; instead of locking the entire container, it locks only specific segments or bucket nodes, maximizing read/write performance.",
                    level: "Advanced"
                },
                {
                    id: "java-q26",
                    question: "What are Java Records and when should you use them?",
                    answer: "Introduced in Java 16, a <code>record</code> is a special, immutable class type designed to act as a simple data carrier. It automatically generates final fields, a canonical constructor, getters, <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code> methods.",
                    level: "Intermediate"
                },
                {
                    id: "java-q27",
                    question: "What is the difference between a process and a thread?",
                    answer: "A process is an independent execution unit with its own private memory block allocated by the OS. A thread is a lightweight sub-process running inside a process that shares the parent's memory space, which allows fast communication but requires sync controls.",
                    level: "Beginner"
                },
                {
                    id: "java-q28",
                    question: "Explain ForkJoinPool and its work-stealing algorithm.",
                    answer: "The <code>ForkJoinPool</code> is a thread pool designed for parallel, recursive divide-and-conquer tasks. Its <b>work-stealing</b> algorithm allows idle worker threads to 'steal' pending sub-tasks from the queues of busy threads, optimizing multi-core CPU efficiency.",
                    level: "Advanced"
                },
                {
                    id: "java-q29",
                    question: "What is a ClassLoader in Java and what are its types?",
                    answer: "A ClassLoader is a subsystem of the JVM that dynamically loads Java classes into memory during runtime. The three primary types are: 1) <b>Bootstrap ClassLoader</b> (loads core runtimes), 2) <b>Platform/Extension ClassLoader</b> (loads extensions), and 3) <b>Application ClassLoader</b> (loads classpath assets).",
                    level: "Advanced"
                },
                {
                    id: "java-q30",
                    question: "What does the Thread.yield() method do?",
                    answer: "The static <code>Thread.yield()</code> method serves as a hint to the thread scheduler that the current executing thread is willing to surrender its current CPU slice to let other threads of equal priority run. The scheduler is free to ignore this hint.",
                    level: "Intermediate"
                },
                {
                    id: "java-q31",
                    question: "Compare synchronized blocks and synchronized methods.",
                    answer: "A <code>synchronized method</code> locks the entire object instance (or class for static methods) during its execution. A <code>synchronized block</code> allows the lock to be acquired on a specific target and keeps lock durations shorter, which improves application performance.",
                    level: "Intermediate"
                },
                {
                    id: "java-q32",
                    question: "What is the Java Module System (Project Jigsaw)?",
                    answer: "Introduced in Java 9, the module system lets you organize packages into modules declared in a <code>module-info.java</code> file. It enforces strong encapsulation, specifies explicit module dependencies, and helps reduce the runtime size of compiled applications.",
                    level: "Advanced"
                },
                {
                    id: "java-q33",
                    question: "What is the difference between throw and throws?",
                    answer: "<code>throw</code> is a statement used within code blocks to explicitly raise a single exception instance. <code>throws</code> is a clause added to a method signature to declare which checked exceptions the method can raise, delegating handling to its callers.",
                    level: "Beginner"
                },
                {
                    id: "java-q34",
                    question: "Explain static binding vs. dynamic binding.",
                    answer: "<ul><li><b>Static Binding (Early):</b> Occurs at compile-time. Method overloading, static, private, or final method executions are resolved early.</li><li><b>Dynamic Binding (Late):</b> Occurs at runtime. Method overriding is resolved dynamically based on the exact type of the instantiated object.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "java-q35",
                    question: "What are Wrapper classes and Autoboxing/Unboxing?",
                    answer: "Wrapper classes (e.g., <code>Integer</code>, <code>Boolean</code>) represent primitives as objects. <b>Autoboxing</b> is the compiler's automatic conversion of primitives into their corresponding objects. <b>Unboxing</b> is the automatic extraction of primitive values from those objects.",
                    level: "Beginner"
                },
                {
                    id: "java-q36",
                    question: "What is the difference between shallow copy and deep copy?",
                    answer: "A <b>shallow copy</b> duplicates the root object but copies references to any nested child objects, meaning changes in child objects affect both copies. A <b>deep copy</b> recursively duplicates the root and all nested objects, keeping the copies independent.",
                    level: "Intermediate"
                },
                {
                    id: "java-q37",
                    question: "What is the native keyword in Java?",
                    answer: "The <code>native</code> keyword indicates that a method is written in platform-dependent machine code (like C or C++) rather than Java. It is linked to Java code using the Java Native Interface (JNI).",
                    level: "Advanced"
                },
                {
                    id: "java-q38",
                    question: "What is a Marker Interface?",
                    answer: "A Marker Interface is an interface containing no methods or fields (e.g., <code>Serializable</code>, <code>Cloneable</code>). It acts as a metadata tag to signal specific class capabilities or behaviors to the compiler and JVM.",
                    level: "Beginner"
                },
                {
                    id: "java-q39",
                    question: "How does String.concat() differ from the + operator?",
                    answer: "<code>String.concat()</code> only accepts string arguments and throws a <code>NullPointerException</code> if the argument is null. The <code>+</code> operator can concatenate any type (automatically invoking <code>toString()</code>) and appends a \"null\" literal string if an object is null.",
                    level: "Intermediate"
                },
                {
                    id: "java-q40",
                    question: "What are Phantom References and Reference Queues in Java?",
                    answer: "Phantom references (<code>PhantomReference</code>) are the weakest reference type. They cannot be retrieved directly and are used to schedule post-mortem cleanup tasks by alerting developers via a <code>ReferenceQueue</code> when objects are cleared.",
                    level: "Advanced"
                },
                {
                    id: "java-q41",
                    question: "What is the purpose of System.gc()?",
                    answer: "<code>System.gc()</code> suggests that the JVM run its garbage collector to free up unused memory space. However, it is only a hint, and the JVM is not guaranteed to run the GC immediately or at all.",
                    level: "Beginner"
                },
                {
                    id: "java-q42",
                    question: "Compare Callable and Runnable interfaces.",
                    answer: "<ul><li><b>Runnable:</b> Defines a <code>run()</code> method, cannot return a calculated result, and cannot throw checked exceptions.</li><li><b>Callable:</b> Defines a <code>call()</code> method, can return generic results, and is permitted to throw checked exceptions.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "java-q43",
                    question: "What is the Diamond Problem and how does Java 8 solve it?",
                    answer: "The Diamond Problem happens when a class inherits multiple default implementations of the same method from different interfaces. Java 8 resolves this by requiring the implementing class to override the method and explicitly choose which interface implementation to run.",
                    level: "Intermediate"
                },
                {
                    id: "java-q44",
                    question: "What are Sealed Classes in Java?",
                    answer: "Introduced in Java 17, sealed classes and interfaces let developers restrict which other classes can extend or implement them. Subclasses must be declared as <code>final</code>, <code>sealed</code>, or <code>non-sealed</code> to enforce compile-time safety.",
                    level: "Advanced"
                },
                {
                    id: "java-q45",
                    question: "What is the Java Memory Model (JMM)?",
                    answer: "The JMM defines how threads interact through shared application memory. It establishes the rules for when writes to variables by one thread become visible to other threads, creating structured 'happens-before' relationships.",
                    level: "Advanced"
                }
            ]
        },
        {
            id: "nodejs",
            title: "Node.js Interview",
            icon: "fa-brands fa-node-js",
            description: "Deep dive into Event Loop dynamics, non-blocking I/O, worker threads, and core runtime architecture.",
            color: "from-green-600 to-emerald-500",
            questions: [
                {
                    id: "node-q1",
                    question: "What is the Event Loop in Node.js and how does it function?",
                    answer: "The Event Loop allows Node.js to handle non-blocking, asynchronous I/O operations despite being single-threaded. It delegates operations to the OS kernel or Libuv's thread pool when possible. The loop runs through distinct phases:\n\n1. <b>Timers:</b> Executes callbacks from <code>setTimeout</code> and <code>setInterval</code>.\n2. <b>Pending Callbacks:</b> Runs system I/O callbacks.\n3. <b>Idle, Prepare:</b> Used only internally.\n4. <b>Poll:</b> Retrieves new I/O events and executes related callbacks.\n5. <b>Check:</b> Invokes <code>setImmediate</code> callbacks.\n6. <b>Close Callbacks:</b> Handles cleanup actions (e.g., <code>socket.on('close')</code>).",
                    level: "Advanced"
                },
                {
                    id: "node-q2",
                    question: "What is the difference between setImmediate() and process.nextTick()?",
                    answer: "<ul><li><b>process.nextTick():</b> Fires callbacks immediately after the current operation finishes, before the Event Loop transitions to its next phase. Overusing it can starve the I/O pipeline.</li><li><b>setImmediate():</b> Places callbacks on the Event Loop's check queue, executing them during the Check phase of the loop's next iteration.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "node-q3",
                    question: "What is the purpose of the Buffer class in Node.js?",
                    answer: "The <code>Buffer</code> class handles raw binary data streams (e.g., file reads, TCP networking) directly in memory, outside of V8's heap. Since standard JavaScript historically only handled strings, buffers allow Node.js to manage raw memory space securely and performantly.",
                    level: "Beginner"
                },
                {
                    id: "node-q4",
                    question: "Explain Streams in Node.js and name the different types.",
                    answer: "Streams allow you to process data sequentially in chunks, instead of loading entire files into memory. This helps prevent out-of-memory errors when working with large datasets. Node.js supports four stream types:\n\n1. <b>Readable:</b> For reading data (e.g., <code>fs.createReadStream()</code>).\n2. <b>Writable:</b> For writing data (e.g., <code>fs.createWriteStream()</code>).\n3. <b>Duplex:</b> Both Readable and Writable (e.g., TCP socket).\n4. <b>Transform:</b> A duplex stream that modifies data as it is read or written (e.g., <code>zlib.createGzip()</code>).",
                    level: "Intermediate"
                },
                {
                    id: "node-q5",
                    question: "What is the difference between package.json and package-lock.json?",
                    answer: "<ul><li><b>package.json:</b> Contains metadata about the project, script aliases, and semantic version ranges for dependencies (e.g., <code>^1.2.0</code>).</li><li><b>package-lock.json:</b> Locks down the exact version of every nested package installed. This ensures identical dependency trees across different local setups, environments, and CI/CD pipelines.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "node-q6",
                    question: "What is REPL in the context of Node.js?",
                    answer: "REPL stands for <b>Read</b>, <b>Eval</b>, <b>Print</b>, and <b>Loop</b>. It is an interactive command-line environment (launched by typing <code>node</code>) where you can test JS code, debug scripts, and execute commands quickly.",
                    level: "Beginner"
                },
                {
                    id: "node-q7",
                    question: "How does the EventEmitter pattern work in Node.js?",
                    answer: "The <code>EventEmitter</code> class (from the <code>events</code> module) facilitates event-driven, pub/sub architectures. An object inherits from EventEmitter to emit named events that trigger registered callback listeners:\n<pre>const EventEmitter = require('events');\nconst emitter = new EventEmitter();\nemitter.on('success', (data) => console.log(data));\nemitter.emit('success', 'Operation succeeded');</pre>",
                    level: "Intermediate"
                },
                {
                    id: "node-q8",
                    question: "What is Callback Hell, and how do you resolve it?",
                    answer: "Callback Hell happens when deeply nested callback functions make asynchronous code difficult to read, maintain, and debug. You can resolve this by:\n\n- Modularizing nested logic into independent functions.\n- Wrapping async APIs in <b>Promises</b>.\n- Using modern <b>async/await</b> syntax to write clean, synchronous-looking asynchronous code.",
                    level: "Beginner"
                },
                {
                    id: "node-q9",
                    question: "What are Worker Threads and when should you use them?",
                    answer: "While Node.js is single-threaded, the <code>worker_threads</code> module allows you to run intensive JavaScript execution in parallel threads. You should use them for <b>CPU-intensive tasks</b> (e.g., video processing, cryptography, parsing large data files) to avoid blocking the main Event Loop and keeping the server responsive.",
                    level: "Advanced"
                },
                {
                    id: "node-q10",
                    question: "What are Express.js middlewares, and how do they function?",
                    answer: "Middleware functions have access to the Request (<code>req</code>) and Response (<code>res</code>) objects, and the <code>next</code> middleware function in the request-response cycle. They can run custom code, modify request/response objects, validate inputs, handle auth checks, or end request execution. Calling <code>next()</code> passes control to the next middleware in line.",
                    level: "Beginner"
                },
                {
                    id: "node-q11",
                    question: "Explain clustering in Node.js.",
                    answer: "The <code>cluster</code> module allows you to spawn child processes (workers) that share the same server port. This lets you run multiple instances of your single-threaded Node.js app across all available CPU cores, improving your application's throughput and scalability.",
                    level: "Intermediate"
                },
                {
                    id: "node-q12",
                    question: "What are best practices for handling errors in production?",
                    answer: "Best practices for production error handling include:\n\n- Categorizing errors into operational (expected, like failed validation) and programmer errors (bugs, like ReferenceError).\n- Handling promise rejections using <code>process.on('unhandledRejection')</code>.\n- Using try/catch blocks with async/await.\n- Logging structured error metrics to external services (such as Winston or Datadog) instead of using raw <code>console.log</code>.",
                    level: "Intermediate"
                },
                {
                    id: "node-q13",
                    question: "Compare CommonJS (CJS) and ES Modules (ESM) in Node.js.",
                    answer: "<ul><li><b>CommonJS:</b> The traditional default format in Node.js. Uses <code>require()</code> for synchronous imports and <code>module.exports</code> for exports.</li><li><b>ES Modules:</b> The modern standard format. Uses <code>import</code>/<code>export</code> statements. It supports static analysis, tree-shaking optimizations, and top-level await syntax. Enabled in Node.js using <code>\"type\": \"module\"</code> in package.json or by using the <code>.mjs</code> file extension.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "node-q14",
                    question: "What is Non-Blocking I/O in Node.js?",
                    answer: "Non-blocking I/O means that system operations (like reading files, querying databases, or making network requests) are executed asynchronously. Instead of waiting for an operation to finish, Node.js registers a callback and continues executing the next block of code, maximizing CPU utilization.",
                    level: "Beginner"
                },
                {
                    id: "node-q15",
                    question: "How do you detect memory leaks in a Node.js application?",
                    answer: "You can find memory leaks by:\n\n- Generating heap snapshots at different times using Chrome DevTools (connecting via the <code>--inspect</code> flag).\n- Monitoring memory usage (like RSS and heapUsed) with <code>process.memoryUsage()</code>.\n- Setting up monitoring tools to track heap changes and trigger alerts when usage spikes.",
                    level: "Advanced"
                },
                {
                    id: "node-q16",
                    question: "What is the purpose of the crypto module in Node.js?",
                    answer: "The built-in <code>crypto</code> module provides cryptographic utilities for handling secure operations, offering wrapper options for OpenSSL methods to manage hash creation, HMAC signatures, encryption/decryption, and digital signatures.",
                    level: "Intermediate"
                },
                {
                    id: "node-q17",
                    question: "Compare fs.readFile and fs.readFileSync.",
                    answer: "<ul><li><b>fs.readFile:</b> Runs asynchronously and is non-blocking. It handles file operations in the background and executes a callback when finished.</li><li><b>fs.readFileSync:</b> Runs synchronously and is blocking, halting the main JavaScript thread until the file is fully read.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "node-q18",
                    question: "What is the purpose of the path module?",
                    answer: "The <code>path</code> module provides helper utilities for working with file and directory paths in a cross-platform manner, resolving differences between Windows (backslashes) and Posix/Unix (forward slashes) directories using methods like <code>path.join()</code>.",
                    level: "Beginner"
                },
                {
                    id: "node-q19",
                    question: "Explain the concept of Backpressure in Node.js Streams.",
                    answer: "Backpressure occurs when data is read from a source faster than the target destination can write or process it. Streams manage this bottleneck by pausing the source's data flow temporarily until the target's write buffer drains, preventing memory crashes.",
                    level: "Advanced"
                },
                {
                    id: "node-q20",
                    question: "What are Environment Variables in Node.js and how do you use them?",
                    answer: "Environment variables store configuration settings outside of code. In Node.js, they are populated into the runtime environment and accessed globally via the <code>process.env</code> object (e.g., <code>process.env.PORT</code>).",
                    level: "Beginner"
                },
                {
                    id: "node-q21",
                    question: "Compare spawn() and fork() in child_process.",
                    answer: "<ul><li><b>spawn():</b> Launches a command in a new process to stream data outputs, making it ideal for processing large amounts of data.</li><li><b>fork():</b> Spawns a new Node.js process, establishing an IPC (Inter-Process Communication) channel to pass messages between parent and child.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "node-q22",
                    question: "What is Cross-Origin Resource Sharing (CORS)?",
                    answer: "CORS is a browser security mechanism that restricts scripts from making requests to a different domain than the one that served the web page. Node.js servers manage this by defining specific <code>Access-Control-Allow-Origin</code> response headers.",
                    level: "Beginner"
                },
                {
                    id: "node-q23",
                    question: "What are memory-efficient ways to parse massive JSON files in Node.js?",
                    answer: "Instead of loading an entire large file with <code>JSON.parse()</code>, you should stream the file contents using packages like <code>JSONStream</code> or <code>oboe.js</code> to parse JSON tokens sequentially as chunks arrive, preventing memory exhaustion.",
                    level: "Advanced"
                },
                {
                    id: "node-q24",
                    question: "What is util.promisify used for in Node.js?",
                    answer: "The <code>util.promisify()</code> utility converts standard, callback-based functions (using the traditional error-first callback signature) into functions that return a Promise, allowing you to write cleaner async/await syntax.",
                    level: "Intermediate"
                },
                {
                    id: "node-q25",
                    question: "How does the V8 engine compile and execute JavaScript?",
                    answer: "V8 parses JS code into an Abstract Syntax Tree (AST). The <b>Ignition</b> interpreter compiles it into bytecode. For frequently executed hot-paths, the <b>Turbofan</b> compiler compiles this bytecode into optimized native machine code.",
                    level: "Advanced"
                },
                {
                    id: "node-q26",
                    question: "Compare child_process.exec() and child_process.execFile().",
                    answer: "<ul><li><b>exec():</b> Spawns a full system shell to run a command, which introduces shell injection security risks and buffers results in memory.</li><li><b>execFile():</b> Executes an executable binary directly without spawning a system shell, which is faster and more secure.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "node-q27",
                    question: "What is the purpose of process.on('uncaughtException')?",
                    answer: "This event captures unhandled JS exceptions that bubble up to the root level. While it prevents immediate server crashes, best practice is to log the error and safely restart the process, as the application's memory state may be unstable.",
                    level: "Intermediate"
                },
                {
                    id: "node-q28",
                    question: "Explain the security differences between SQL and NoSQL Injection in Node.js.",
                    answer: "SQL injection occurs when user inputs are concatenated directly into database query statements. NoSQL injection happens when query inputs are passed as objects containing operators (like <code>$gt: \"\"</code>). Both are prevented using query parameterization or schema validation.",
                    level: "Intermediate"
                },
                {
                    id: "node-q29",
                    question: "What is the dns module used for in Node.js?",
                    answer: "The built-in <code>dns</code> module provides network name resolution capabilities. It is used to perform actual DNS lookups (e.g., getting IP addresses for domains) and querying specific records (like MX or TXT files).",
                    level: "Beginner"
                },
                {
                    id: "node-q30",
                    question: "How does the cluster module coordinate worker processes?",
                    answer: "The <code>cluster</code> module uses a master-worker setup. The master process receives incoming connections and uses IPC channels to distribute them. On non-Windows platforms, it uses a Round-Robin load-balancing approach.",
                    level: "Advanced"
                },
                {
                    id: "node-q31",
                    question: "What is helmet.js and why should you use it?",
                    answer: "<code>helmet</code> is a popular middleware package for Express.js. It configures secure, custom HTTP response headers (such as <code>Content-Security-Policy</code>) to protect your application from common web vulnerabilities.",
                    level: "Beginner"
                },
                {
                    id: "node-q32",
                    question: "What is the Libuv Thread Pool and how do you configure its size?",
                    answer: "Libuv uses a background thread pool to handle tasks that aren't natively supported asynchronously by the OS (like file system and crypto operations). Its default size is 4, but you can change it using the environment variable <code>UV_THREADPOOL_SIZE</code>.",
                    level: "Advanced"
                },
                {
                    id: "node-q33",
                    question: "What is the difference between Authentication and Authorization?",
                    answer: "<ul><li><b>Authentication:</b> Verifying the identity of a user (e.g., verifying their password or API token).</li><li><b>Authorization:</b> Verifying what permissions or resources an authenticated user is allowed to access.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "node-q34",
                    question: "What is stream.pipeline() and why is it preferred over .pipe()?",
                    answer: "While <code>.pipe()</code> transfers data between streams, it does not handle errors or clean up resources automatically if a stream fails mid-transmission. <code>stream.pipeline()</code> joins streams together, handles errors cleanly in a single callback, and closes all streams if an error occurs.",
                    level: "Intermediate"
                },
                {
                    id: "node-q35",
                    question: "Explain V8 Heap Memory spaces.",
                    answer: "The V8 heap is divided into: 1) <b>New Space:</b> A small, fast-cleared area for short-lived objects; 2) <b>Old Space:</b> For surviving objects from the New Space; 3) <b>Large Object Space:</b> For allocations exceeding limits; 4) <b>Code Space:</b> Where compiled native code resides; 5) <b>Map Space:</b> For hidden classes.",
                    level: "Advanced"
                },
                {
                    id: "node-q36",
                    question: "What is the modern replacement for the legacy querystring module?",
                    answer: "The legacy <code>querystring</code> module is deprecated. Developers should use the standard, built-in browser-compatible <code>URLSearchParams</code> API, which handles query strings natively in modern Node.js environments.",
                    level: "Beginner"
                },
                {
                    id: "node-q37",
                    question: "How do you write and run Unit Tests in modern Node.js?",
                    answer: "Modern Node.js (version 18+) includes a built-in test runner. You can import the <code>test</code> module and use assertions to write test cases without needing third-party libraries like Mocha or Jest:\n<pre>import test from 'node:test';\nimport assert from 'node:assert';\ntest('test description', () => { assert.strictEqual(1, 1); });</pre>",
                    level: "Beginner"
                },
                {
                    id: "node-q38",
                    question: "What are git hooks and how do they benefit a Node.js workflow?",
                    answer: "Git hooks are custom scripts that run automatically at specific points in a git workflow (such as pre-commit or pre-push). In Node.js, libraries like <code>husky</code> automate setting up these hooks to run linters, formatters, or test suites before committing code.",
                    level: "Intermediate"
                },
                {
                    id: "node-q39",
                    question: "What is the purpose of the built-in vm module?",
                    answer: "The <code>vm</code> (Virtual Machine) module allows you to compile and execute JavaScript code within an isolated V8 context. It is commonly used to safely run dynamic configurations or scripts, though it should not be treated as a secure sandbox for malicious code.",
                    level: "Advanced"
                },
                {
                    id: "node-q40",
                    question: "How does PM2 help run and manage Node.js servers?",
                    answer: "PM2 is a production process manager for Node.js. It runs your application in the background, automatically restarts it if it crashes, supports zero-downtime hot-reloads, manages logs, and scales the application across multiple cores using a cluster mode.",
                    level: "Intermediate"
                },
                {
                    id: "node-q41",
                    question: "Explain Cold Starts vs. Warm Starts in Serverless environments.",
                    answer: "A <b>Cold Start</b> occurs when a serverless function is invoked after being idle, forcing the cloud provider to provision a new container and initialize the Node.js runtime environment. A <b>Warm Start</b> reuse an active, pre-initialized container, which speeds up response times.",
                    level: "Intermediate"
                },
                {
                    id: "node-q42",
                    question: "Explain the structure of Semantic Versioning (SemVer).",
                    answer: "SemVer uses a <code>MAJOR.MINOR.PATCH</code> numbering system:\n- <b>MAJOR:</b> Incremented for incompatible API changes.\n- <b>MINOR:</b> Incremented for backwards-compatible additions.\n- <b>PATCH:</b> Incremented for backwards-compatible bug fixes.",
                    level: "Beginner"
                },
                {
                    id: "node-q43",
                    question: "What is the difference between Object.freeze() and deep freezing?",
                    answer: "<code>Object.freeze()</code> freezes only the immediate properties of an object, leaving nested objects mutable. Deep freezing is a custom utility function that recursively traverses and freezes every nested object to make the entire data structure immutable.",
                    level: "Intermediate"
                },
                {
                    id: "node-q44",
                    question: "Explain the Close Callbacks phase of the Event Loop.",
                    answer: "The 'Close callbacks' phase runs at the very end of an Event Loop cycle. It processes callbacks for resources that have closed unexpectedly or explicitly, such as when a TCP socket connection is closed using <code>socket.on('close')</code>.",
                    level: "Advanced"
                },
                {
                    id: "node-q45",
                    question: "How can you implement a custom Writable Stream in Node.js?",
                    answer: "You can implement a custom writable stream by extending the <code>Writable</code> class from the <code>stream</code> module and overriding the internal <code>_write(chunk, encoding, callback)</code> method to control how write operations handle chunks of data.",
                    level: "Advanced"
                }
            ]
        },
        {
            id: "react",
            title: "React Interview",
            icon: "fa-brands fa-react",
            description: "Master Virtual DOM optimization, lifecycle mechanics, Hooks, state rendering patterns, and performance tuning.",
            color: "from-sky-600 to-blue-500",
            questions: [
                {
                    id: "react-q1",
                    question: "What is the Virtual DOM and how does React use it?",
                    answer: "The Virtual DOM is a lightweight, in-memory representation of the real DOM. When state changes occur:\n\n1. React generates a new Virtual DOM tree representing the updated UI.\n2. It compares this new tree with the previous one to find the exact differences (a process called <b>Diffing</b>).\n3. It updates only those changed nodes in the real DOM (called <b>Reconciliation</b>), minimizing expensive browser rendering calculations.",
                    level: "Beginner"
                },
                {
                    id: "react-q2",
                    question: "Explain the difference between Props and State.",
                    answer: "<ul><li><b>Props:</b> Read-only configurations passed down from parent to child components, allowing elements to be reusable.</li><li><b>State:</b> Local, mutable data managed internally by a component. When state values update, the component re-renders to reflect those changes in the UI.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "react-q3",
                    question: "Compare Class and Functional components.",
                    answer: "<ul><li><b>Class Components:</b> ES6 classes that extend <code>React.Component</code>. They manage local state via <code>this.state</code> and use lifecycle methods (such as <code>componentDidMount</code>).</li><li><b>Functional Components:</b> Plain JS functions that receive props. Since React 16.8, they can manage state and side-effects using <b>Hooks</b>, which makes components easier to read and test.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "react-q4",
                    question: "Describe the component lifecycle methods in Class components.",
                    answer: "Class lifecycles are split into three main phases:\n\n1. <b>Mounting:</b> <code>constructor()</code>, <code>render()</code>, and <code>componentDidMount()</code> (useful for initial network requests).\n2. <b>Updating:</b> <code>shouldComponentUpdate()</code> and <code>componentDidUpdate()</code> (runs after state or props change).\n3. <b>Unmounting:</b> <code>componentWillUnmount()</code> (used to clean up subscriptions and event listeners).",
                    level: "Intermediate"
                },
                {
                    id: "react-q5",
                    question: "What are the Rules of Hooks?",
                    answer: "React Hooks have two strict rules:\n\n1. <b>Only call Hooks at the top level:</b> Do not call them inside loops, conditions, or nested functions to ensure they always execute in the same order on every render.\n2. <b>Only call Hooks from React functions:</b> Only call them from React functional components or custom hooks, not from ordinary JavaScript functions.",
                    level: "Intermediate"
                },
                {
                    id: "react-q6",
                    question: "What is the Context API and when should you use it?",
                    answer: "The Context API allows you to share global data (like themes, user auth states, or language settings) across components without manually passing props through every level of the component tree (prop drilling).",
                    level: "Intermediate"
                },
                {
                    id: "react-q7",
                    question: "Why is the key prop important when rendering lists in React?",
                    answer: "The <code>key</code> prop helps React identify which items in a list have changed, been added, or been removed. Using stable, unique keys (instead of array indexes) ensures React can update the DOM efficiently and avoid rendering bugs with stateful child components.",
                    level: "Beginner"
                },
                {
                    id: "react-q8",
                    question: "What is a Custom Hook and how do you write one?",
                    answer: "A custom hook is a JavaScript function whose name starts with <code>use</code> and that can call other hooks. It lets you extract and reuse stateful logic across multiple components:\n<pre>function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n  return width;\n}</pre>",
                    level: "Intermediate"
                },
                {
                    id: "react-q9",
                    question: "How do you optimize rendering performance in React?",
                    answer: "You can optimize performance in React by:\n\n- Skipping re-renders of child components using <code>React.memo()</code> when their props haven't changed.\n- Memoizing expensive computations with <code>useMemo()</code>.\n- Wrapping functions passed as props in <code>useCallback()</code> to maintain reference equality across renders.\n- Virtualizing long lists (e.g., using <code>react-window</code>) to render only the items visible on the screen.",
                    level: "Advanced"
                },
                {
                    id: "react-q10",
                    question: "What are Synthetic Events in React?",
                    answer: "Synthetic Events are React's cross-browser wrapper around the browser’s native events. They work identically across different browsers while improving performance by using a single, global event delegate.",
                    level: "Intermediate"
                },
                {
                    id: "react-q11",
                    question: "Compare Controlled and Uncontrolled components.",
                    answer: "<ul><li><b>Controlled:</b> Form data is handled directly by the React component state. State updates on every keystroke, making inputs highly predictable.</li><li><b>Uncontrolled:</b> Form data is handled directly by the browser DOM. React accesses input values using <code>refs</code> when needed, which can be useful for simple forms or integrating with non-React libraries.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "react-q12",
                    question: "What is the difference between SSR and CSR?",
                    answer: "<ul><li><b>Client-Side Rendering (CSR):</b> The browser downloads a minimal HTML file and a large JavaScript bundle to render the entire UI. This can lead to slower initial page loads but provides fast subsequent page transitions.</li><li><b>Server-Side Rendering (SSR):</b> The server renders components into static HTML on every request. This improves initial page load times and SEO rankings since search engines can crawl the fully rendered content immediately.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "react-q13",
                    question: "What are Portals in React and when should you use them?",
                    answer: "Portals let you render child components into a different DOM node outside of their parent component hierarchy. They are commonly used for UI elements like modals, tooltips, and dropdowns to prevent style clipping or z-index layout issues:\n<pre>ReactDOM.createPortal(child, containerNode)</pre>",
                    level: "Advanced"
                },
                {
                    id: "react-q14",
                    question: "What is a Higher-Order Component (HOC)?",
                    answer: "A Higher-Order Component is an advanced React pattern for reusing component logic. It is a function that takes a component as an argument and returns a new, enhanced component with injected props or functionality:\n<pre>const EnhancedComponent = withAuthLogger(WrappedComponent);</pre>",
                    level: "Intermediate"
                },
                {
                    id: "react-q15",
                    question: "How does the React Fiber engine work?",
                    answer: "React Fiber is a complete rewrite of the reconciliation algorithm. It allows React to pause, resume, or discard rendering work to keep the browser responsive. This helps prioritize high-priority updates (like typing or animations) over lower-priority, background rendering tasks.",
                    level: "Advanced"
                },
                {
                    id: "react-q16",
                    question: "What is the purpose of the useRef hook?",
                    answer: "<code>useRef</code> returns a mutable ref object with a <code>.current</code> property. It can be used to reference a DOM element directly or to store a mutable value that persists across renders without triggering a re-render when its value changes.",
                    level: "Beginner"
                },
                {
                    id: "react-q17",
                    question: "What are React Fragments and why are they used?",
                    answer: "React Fragments (written as <code>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</code> or short syntax <code>&lt;&gt;&lt;/&gt;</code>) let you group a list of child elements without adding extra nodes to the DOM, keeping your HTML markup cleaner and preventing layout styling breaks.",
                    level: "Beginner"
                },
                {
                    id: "react-q18",
                    question: "What is the difference between useEffect and useLayoutEffect?",
                    answer: "<ul><li><b>useEffect:</b> Runs asynchronously after the browser paints screen updates. It is preferred for most side-effects to avoid blocking visual page renders.</li><li><b>useLayoutEffect:</b> Runs synchronously after DOM mutations but before the browser paints. Use this for calculations like measuring layouts to avoid visual flickering.</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "react-q19",
                    question: "Explain the concept of lifting state up in React.",
                    answer: "Lifting state up means moving shared state up to the closest common parent component of two or more child components that need to share that data. This ensures a single source of truth across components.",
                    level: "Beginner"
                },
                {
                    id: "react-q20",
                    question: "What are Error Boundaries and how do they function?",
                    answer: "Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire page. They must be implemented using Class components with <code>getDerivedStateFromError</code> or <code>componentDidCatch</code>.",
                    level: "Intermediate"
                },
                {
                    id: "react-q21",
                    question: "Compare useMemo and useCallback.",
                    answer: "<ul><li><b>useMemo:</b> Caches the calculated *result* of a costly function, updating it only when dependencies change.</li><li><b>useCallback:</b> Caches the *function definition* itself, preventing it from being recreated on every render to maintain reference equality.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "react-q22",
                    question: "What is Prop Drilling and how can you avoid it?",
                    answer: "Prop Drilling is the process of passing props down through multiple layers of nested components to reach a deeply nested child component. It can be avoided by restructuring components, using component composition, or using global state options like React Context or Redux.",
                    level: "Beginner"
                },
                {
                    id: "react-q23",
                    question: "What is React StrictMode and what does it do in development?",
                    answer: "<code>StrictMode</code> is a tool that highlights potential problems in an application. In development, it intentionally double-invokes render methods and hooks (like <code>useEffect</code>) to help find side-effects, resource leaks, and deprecated lifecycle methods.",
                    level: "Intermediate"
                },
                {
                    id: "react-q24",
                    question: "Explain Automatic State Batching in React 18.",
                    answer: "In React 18, multiple state updates inside promises, timeouts, fetch requests, or native event handlers are automatically combined (batched) into a single re-render. This improves rendering performance and avoids rendering partially updated intermediate UI states.",
                    level: "Advanced"
                },
                {
                    id: "react-q25",
                    question: "What is forwardRef and when should you use it?",
                    answer: "<code>forwardRef</code> lets a component pass a ref down to one of its child DOM elements. This is useful for building reusable, low-level components (like custom inputs or buttons) that parent components need to directly focus or measure.",
                    level: "Intermediate"
                },
                {
                    id: "react-q26",
                    question: "What is the difference between a React Element and a Component?",
                    answer: "<ul><li><b>Element:</b> A plain JavaScript object that describes what you want to see on the screen (e.g., <code>&lt;div /&gt;</code>). It is immutable.</li><li><b>Component:</b> A template or function that accepts props and returns a React element tree, allowing UI logic to be split into reusable pieces.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "react-q27",
                    question: "Can you use Web Components inside a React application?",
                    answer: "Yes, React can render custom elements defined as Web Components. You pass data to them as standard attributes or properties, though you may need to attach custom event listeners to capture custom elements' events in React.",
                    level: "Intermediate"
                },
                {
                    id: "react-q28",
                    question: "What is Concurrent Rendering in React 18?",
                    answer: "Concurrent Rendering is a background capability that allows React to pause, yield, and resume rendering operations. This means React can interrupt a long-running render task to immediately process high-priority user actions (like typing), keeping interfaces interactive.",
                    level: "Advanced"
                },
                {
                    id: "react-q29",
                    question: "What is the useDeferredValue hook and when should you use it?",
                    answer: "<code>useDeferredValue</code> accepts a state value and returns a deferred version of that value. It lets you defer updating a slow or complex part of the UI (like filtering a long list) until high-priority screen updates are completed.",
                    level: "Advanced"
                },
                {
                    id: "react-q30",
                    question: "Compare useTransition and standard state updates.",
                    answer: "Standard state updates are high-priority and block the user interface during rendering. The <code>useTransition</code> hook lets you mark state updates as low-priority transitions (using <code>startTransition</code>), which allows the UI to stay fully responsive while data compiles in the background.",
                    level: "Advanced"
                },
                {
                    id: "react-q31",
                    question: "What is the purpose of the hook Dependency Array?",
                    answer: "The dependency array (e.g., in <code>useEffect</code> or <code>useMemo</code>) lists variables that the hook relies on. React compares current values against previous values; the hook executes its internal function only if one or more listed dependencies have changed.",
                    level: "Beginner"
                },
                {
                    id: "react-q32",
                    question: "What are the trade-offs of CSS-in-JS libraries?",
                    answer: "CSS-in-JS (like styled-components) scopes styles directly to components, which prevents class collisions and simplifies dynamic styling. However, trade-offs include larger JS bundle sizes, a slight runtime rendering overhead, and a lack of standard CSS caching support.",
                    level: "Intermediate"
                },
                {
                    id: "react-q33",
                    question: "Compare Client-Side State and Server-Side State in React.",
                    answer: "<ul><li><b>Client-Side State:</b> UI data managed inside the browser (like modal toggle states or input values).</li><li><b>Server-Side State:</b> Data that comes from a server (like list views or user details). It is often cached and managed using tools like React Query/TanStack Query.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "react-q34",
                    question: "Why is using array index as key in list renderings discouraged?",
                    answer: "Using an array index as a <code>key</code> can cause UI rendering bugs when list items are sorted, added, or removed. React uses keys to match components with DOM nodes, and dynamic index changes can cause React to reuse state from mismatched elements.",
                    level: "Intermediate"
                },
                {
                    id: "react-q35",
                    question: "Explain the Render Phase vs. Commit Phase in React.",
                    answer: "<ul><li><b>Render Phase:</b> React evaluates components, calls hooks, and compares virtual DOM structures to find differences. This phase is pure and can be paused or restarted.</li><li><b>Commit Phase:</b> React applies the calculated changes to the real DOM. This phase runs synchronously and cannot be interrupted.</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "react-q36",
                    question: "How do React.lazy and Suspense help improve bundle sizes?",
                    answer: "<code>React.lazy()</code> lets you dynamically import components, loading them only when they are rendered. <code>Suspense</code> wraps these lazy components to show a fallback loader (like a spinner) while the JavaScript chunk is being downloaded over the network.",
                    level: "Intermediate"
                },
                {
                    id: "react-q37",
                    question: "Compare Controlled State Forms and React Hook Form.",
                    answer: "Controlled forms update state on every keystroke, which can cause performance lag in large forms. React Hook Form uses uncontrolled inputs under the hood (accessing values via refs) and updates component states only when validation is triggered, improving rendering speeds.",
                    level: "Intermediate"
                },
                {
                    id: "react-q38",
                    question: "What is component Prop Validation using PropTypes?",
                    answer: "<code>PropTypes</code> is a library used to check runtime prop types in React. It lets you declare what types of props (e.g., string, function) components expect, triggering console warnings in development if mismatched values are passed.",
                    level: "Beginner"
                },
                {
                    id: "react-q39",
                    question: "How does useEffect map to Class component lifecycles?",
                    answer: "A <code>useEffect</code> hook covers multiple class lifecycles:\n- Empty dependencies <code>[]</code> maps to <code>componentDidMount</code>.\n- Dependencies listed <code>[state]</code> maps to <code>componentDidUpdate</code>.\n- The returned cleanup function maps to <code>componentWillUnmount</code>.",
                    level: "Intermediate"
                },
                {
                    id: "react-q40",
                    question: "How does the Reconciliation algorithm match nodes?",
                    answer: "React's reconciliation algorithm is an O(N) heuristic. It matches elements based on two rules: 1) Two elements of different HTML types will produce completely different trees, tearing down the old tree; 2) Elements with matching, unique <code>key</code> properties are reused and moved rather than re-rendered.",
                    level: "Advanced"
                },
                {
                    id: "react-q41",
                    question: "How do you optimize Context values to prevent unnecessary updates?",
                    answer: "Every time a Context provider value changes, all subscribing components re-render. To prevent this, you can wrap the provider's value object in a <code>useMemo</code> hook so that its reference updates only when actual data values change, preventing unnecessary renders.",
                    level: "Advanced"
                },
                {
                    id: "react-q42",
                    question: "What is the useImperativeHandle hook used for?",
                    answer: "<code>useImperativeHandle</code> works with <code>forwardRef</code>. It lets a child component customize and limit which functions or properties are exposed to parent component refs, preventing parents from having unrestricted access to child nodes.",
                    level: "Advanced"
                },
                {
                    id: "react-q43",
                    question: "What are the performance limitations of React Context?",
                    answer: "Context is not designed for fast-changing or high-frequency state updates. Because any value change triggers a re-render of all child consumers, frequent changes can cause performance issues, making dedicated state managers (like Redux or Zustand) better for high-frequency updates.",
                    level: "Intermediate"
                },
                {
                    id: "react-q44",
                    question: "What is the useId hook in React 18?",
                    answer: "<code>useId</code> is a hook that generates stable, unique IDs across both server-rendered and client-rendered code. This prevents ID hydration mismatch errors when linking HTML labels to inputs in SSR setups.",
                    level: "Beginner"
                },
                {
                    id: "react-q45",
                    question: "What is a clean-up function in useEffect and when does it run?",
                    answer: "A cleanup function is a function returned inside a <code>useEffect</code> hook. It runs right before the component unmounts and before the effect runs again, letting you safely clear timers, close sockets, and remove event listeners.",
                    level: "Beginner"
                }
            ]
        },
        {
            id: "nextjs",
            title: "Next.js Interview",
            icon: "fa-solid fa-n",
            description: "Learn Next.js App Router, SSR, Static Generation, Incremental Regeneration, API Routes, and server rendering.",
            color: "from-slate-800 to-slate-900",
            questions: [
                {
                    id: "next-q1",
                    question: "What is Next.js and what are its key advantages?",
                    answer: "Next.js is a React framework for building fast web applications. Key advantages include:\n\n- Built-in optimizations for images, fonts, and scripts.\n- Support for multiple rendering strategies: SSR, SSG, and ISR.\n- File-system-based routing.\n- Seamless Server Actions and API route handling.\n- Automatic code splitting and improved search engine optimization (SEO).",
                    level: "Beginner"
                },
                {
                    id: "next-q2",
                    question: "Compare Pages Router and App Router in Next.js.",
                    answer: "<ul><li><b>Pages Router:</b> The classic routing system where routes are mapped directly to files inside the <code>pages/</code> directory. Uses options like <code>getServerSideProps</code> to fetch data.</li><li><b>App Router:</b> The modern system introduced in Next.js 13 inside the <code>app/</code> directory. Built on React Server Components, it supports nested layouts, loading states, and granular error boundaries, using standard async/await for data fetching.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "next-q3",
                    question: "Describe SSR, SSG, and ISR.",
                    answer: "<ul><li><b>Static Site Generation (SSG):</b> Generates HTML files at build time. Ideal for content that doesn't change frequently (like blogs or documentation).</li><li><b>Server-Side Rendering (SSR):</b> Renders HTML dynamically on the server for every incoming request. Useful for highly dynamic, personalized dashboards.</li><li><b>Incremental Static Regeneration (ISR):</b> Allows you to update static pages in the background without rebuilding the entire site, using a revalidation timeout interval.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "next-q4",
                    question: "How do you handle Dynamic Routes in Next.js?",
                    answer: "Dynamic routes are created by wrapping file or folder names in square brackets. For example, in the App Router, <code>app/blog/[id]/page.js</code> matches routes like <code>/blog/123</code>. The parameter is accessible inside the component via the <code>params</code> prop:\n<pre>export default function Page({ params }) {\n  return &lt;p&gt;Post ID: {params.id}&lt;/p&gt;;\n}</pre>",
                    level: "Beginner"
                },
                {
                    id: "next-q5",
                    question: "How do you build API Routes in Next.js?",
                    answer: "In the App Router, API routes are defined using <code>route.js</code> files inside the <code>app/api/</code> directory. They export HTTP verb handler functions (GET, POST, etc.) and receive standard Request objects:\n<pre>import { NextResponse } from 'next/server';\n\nexport async function GET() {\n  return NextResponse.json({ message: 'Success' });\n}</pre>",
                    level: "Intermediate"
                },
                {
                    id: "next-q6",
                    question: "What are the benefits of the Next.js Image component?",
                    answer: "The <code>&lt;Image /&gt;</code> component automatically optimizes images to improve site performance:\n\n- Serves resized images in modern formats (like WebP) based on the user's viewport.\n- Uses native lazy loading to load images only as they enter the screen.\n- Prevents layout shifts during page loads by reserving space for images beforehand.",
                    level: "Beginner"
                },
                {
                    id: "next-q7",
                    question: "What is the role of getStaticProps and getServerSideProps?",
                    answer: "In the Pages Router:\n\n- <code>getStaticProps</code> runs at build time on the server to fetch data for static sites.\n- <code>getServerSideProps</code> runs on the server for every incoming request to fetch data for dynamic pages before they render.",
                    level: "Intermediate"
                },
                {
                    id: "next-q8",
                    question: "How does Middleware work in Next.js?",
                    answer: "Middleware lets you run code on the server before a request is completed. Located in a root-level <code>middleware.js</code> file, it is commonly used to inspect cookies, redirect users, check authentication, or rewrite incoming request paths.",
                    level: "Advanced"
                },
                {
                    id: "next-q9",
                    question: "How does Next.js optimize SEO?",
                    answer: "Next.js offers a Metadata API for configuring SEO settings in layout or page files. You can export a static metadata object or generate dynamic metadata dynamically to set custom meta tags, OpenGraph images, and canonical tags:\n<pre>export const metadata = {\n  title: 'My Custom Page',\n  description: 'Page description...'\n};</pre>",
                    level: "Intermediate"
                },
                {
                    id: "next-q10",
                    question: "What is the difference between Client and Server Components in the App Router?",
                    answer: "<ul><li><b>Server Components:</b> The default components in Next.js. They render entirely on the server, keep large dependencies out of the client bundle, and don't support interactive state or event listeners.</li><li><b>Client Components:</b> Opted in using the <code>'use client'</code> directive. They can use hooks (like <code>useState</code> or <code>useEffect</code>) and handle user interactions (like clicks or changes).</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "next-q11",
                    question: "What causes Hydration errors in Next.js and how do you resolve them?",
                    answer: "Hydration errors happen when the pre-rendered HTML from the server does not match the initial HTML rendered by the client. Common causes include:\n\n- Using client-only state variables (like <code>window</code> or <code>localStorage</code>) directly during the initial render.\n- Nesting invalid HTML elements (such as placing a <code>&lt;div&gt;</code> inside a <code>&lt;p&gt;</code>).\n- Resolving this involves moving client-only logic inside <code>useEffect</code> hooks to ensure it runs only on the client.",
                    level: "Advanced"
                },
                {
                    id: "next-q12",
                    question: "How do you handle routing events and route changes programmatically?",
                    answer: "In the App Router, you can handle programmatic navigation using the <code>useRouter()</code> hook from <code>next/navigation</code>:\n<pre>import { useRouter } from 'next/navigation';\n\nconst router = useRouter();\nrouter.push('/dashboard');</pre>",
                    level: "Beginner"
                },
                {
                    id: "next-q13",
                    question: "Explain Incremental Static Regeneration (ISR) at runtime.",
                    answer: "ISR lets you regenerate static pages in the background as requests come in, rather than rebuilding your entire application. You can set a revalidation interval (in seconds) to update cached static pages once new data is available:\n<pre>export const revalidate = 60; // Revalidate every minute</pre>",
                    level: "Advanced"
                },
                {
                    id: "next-q14",
                    question: "How does Next.js handle Google Font optimization?",
                    answer: "Next.js includes a built-in font optimization module (<code>next/font</code>) that automatically downloads Google Fonts at build time and hosts them locally alongside your app. This eliminates extra font request roundtrips and prevents page flashes (FOUT) during loading.",
                    level: "Intermediate"
                },
                {
                    id: "next-q15",
                    question: "What is static export in Next.js?",
                    answer: "Setting <code>output: 'export'</code> in your <code>next.config.js</code> exports your application into static HTML, CSS, and JS files. This allows you to host your app on static hosting providers (such as GitHub Pages or AWS S3), though server-side features (like Dynamic SSR or API Routes) will not be supported.",
                    level: "Advanced"
                },
                {
                    id: "next-q16",
                    question: "What is the next/link component and why should you use it?",
                    answer: "The <code>&lt;Link&gt;</code> component replaces standard HTML <code>&lt;a&gt;</code> tags. It intercepts clicks to perform client-side navigation without full page reloads, prefetching background page data when links enter the viewport.",
                    level: "Beginner"
                },
                {
                    id: "next-q17",
                    question: "What is the purpose of layout.js in the App Router?",
                    answer: "A <code>layout.js</code> file defines UI components (like headers or footers) shared across multiple nested route pages. Unlike pages, layouts do not re-render or reset their internal state when navigating between child routes.",
                    level: "Beginner"
                },
                {
                    id: "next-q18",
                    question: "Compare layout.js and template.js in the App Router.",
                    answer: "While both wrap child route layouts, <code>layout.js</code> maintains its state and component instances across route transitions. In contrast, <code>template.js</code> mounts a fresh component instance and resets its state on every route change, useful for entering animations or reset counters.",
                    level: "Advanced"
                },
                {
                    id: "next-q19",
                    question: "What are Server Actions in Next.js?",
                    answer: "Server Actions allow you to run backend code directly on the server without manually creating an API route. They are defined using the <code>'use server'</code> directive, enabling forms to submit data securely directly to asynchronous backend functions.",
                    level: "Advanced"
                },
                {
                    id: "next-q20",
                    question: "How does Next.js perform automatic Code Splitting?",
                    answer: "Next.js splits code into small page bundles instead of loading a single massive JavaScript bundle. This means the browser downloads only the JavaScript code required for the current route, which speeds up page loads.",
                    level: "Intermediate"
                },
                {
                    id: "next-q21",
                    question: "What are Route Groups and how do you define them?",
                    answer: "Route Groups let you organize folder routes without affecting the URL structure. They are defined by wrapping a folder name in parentheses, such as <code>app/(marketing)/about/page.js</code>, which maps to the clean URL <code>/about</code>.",
                    level: "Intermediate"
                },
                {
                    id: "next-q22",
                    question: "Explain Parallel Routes in the App Router.",
                    answer: "Parallel Routes let you render multiple pages simultaneously inside the same layout using slots. They are defined using folders prefixed with the <code>@</code> character (e.g., <code>@analytics</code>), allowing dashboards to show independent loading or state views.",
                    level: "Advanced"
                },
                {
                    id: "next-q23",
                    question: "Explain Intercepting Routes in the App Router.",
                    answer: "Intercepting routes let you load a route inside the current layout while masking the URL. It uses notations like <code>(.)route</code> (similar to relative paths) to load content (like showing a product modal on click) while preserving direct URLs for copy-pasting.",
                    level: "Advanced"
                },
                {
                    id: "next-q24",
                    question: "What is the role of loading.js in the App Router?",
                    answer: "A <code>loading.js</code> file automatically wraps route components inside a React Suspense boundary. It displays fallback skeleton loaders immediately during data-fetching page transitions, keeping application screens responsive.",
                    level: "Beginner"
                },
                {
                    id: "next-q25",
                    question: "How does error.js handle runtime exceptions?",
                    answer: "An <code>error.js</code> file wraps a route in a React Error Boundary. If an exception occurs, it displays a fallback error view instead of crashing. It provides a <code>reset()</code> function to let users try reloading the component state.",
                    level: "Intermediate"
                },
                {
                    id: "next-q26",
                    question: "What is generateStaticParams in Next.js?",
                    answer: "In the App Router, <code>generateStaticParams</code> replaces the Pages Router's <code>getStaticPaths</code>. It runs during build time to define list configurations for dynamic routes (like <code>/blog/[id]</code>), generating static pages ahead of time.",
                    level: "Advanced"
                },
                {
                    id: "next-q27",
                    question: "How do you configure Redirects in Next.js?",
                    answer: "You can configure redirects globally using the <code>redirects</code> array inside <code>next.config.js</code>, path-specifically using the <code>redirect()</code> function inside Server Components, or dynamically inside a custom Middleware script.",
                    level: "Beginner"
                },
                {
                    id: "next-q28",
                    question: "What is the purpose of global-error.js?",
                    answer: "While <code>error.js</code> handles errors inside nested route boundaries, it cannot catch errors inside root-level layout files. <code>global-error.js</code> resides in the root <code>app/</code> directory to handle errors that occur in root layouts.",
                    level: "Advanced"
                },
                {
                    id: "next-q29",
                    question: "What is the not-found.js file used for?",
                    answer: "A <code>not-found.js</code> file defines a fallback UI when a route does not exist or when the <code>notFound()</code> function is invoked inside a Server Component, replacing standard generic 404 pages.",
                    level: "Beginner"
                },
                {
                    id: "next-q30",
                    question: "What is Draft Mode and how does it function?",
                    answer: "Draft Mode lets authors view draft content immediately from a headless CMS without waiting for build steps. It works by setting secure, temporary cookies that bypass static generation and fetch live, real-time data on demand.",
                    level: "Advanced"
                },
                {
                    id: "next-q31",
                    question: "Compare revalidatePath and revalidateTag.",
                    answer: "<ul><li><b>revalidatePath:</b> Clears the cached data for a specific URL path (e.g., <code>/posts</code>).</li><li><b>revalidateTag:</b> Clears cache keys globally based on custom cache tags assigned during fetch calls, letting you invalidate specific data sets across multiple paths.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "next-q32",
                    question: "What are Route Handlers in the App Router?",
                    answer: "Route Handlers let you build custom request handlers for specific paths using Web Request and Response APIs. They are declared in <code>route.js</code> files and export methods like GET or POST to act as API endpoints.",
                    level: "Intermediate"
                },
                {
                    id: "next-q33",
                    question: "What is the purpose of next.config.js?",
                    answer: "<code>next.config.js</code> is a custom Node.js module used to configure Next.js compiler preferences, set environment variables, specify redirect rules, define domain-safe image hosts, and customize Webpack settings.",
                    level: "Beginner"
                },
                {
                    id: "next-q34",
                    question: "How do you handle environment variables in Next.js client vs. server?",
                    answer: "All variables defined in env files are accessible only on the server to prevent exposing API secrets. To make environment variables available to browser code, they must be prefixed with <code>NEXT_PUBLIC_</code>.",
                    level: "Intermediate"
                },
                {
                    id: "next-q35",
                    question: "How do you integrate Tailwind CSS with Next.js?",
                    answer: "Tailwind CSS is configured by installing its packages and creating a <code>tailwind.config.js</code> file that defines search pathways for App Router classes. You then import the Tailwind directives inside the root <code>global.css</code> file.",
                    level: "Beginner"
                },
                {
                    id: "next-q36",
                    question: "Explain Static Rendering vs. Dynamic Rendering in the App Router.",
                    answer: "<ul><li><b>Static Rendering:</b> Next.js renders routes at build time or in the background, serving cached results to all users.</li><li><b>Dynamic Rendering:</b> Next.js renders routes on the server for each request, which is triggered when dynamic functions (like cookies or headers) are accessed.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "next-q37",
                    question: "How does next/script optimize script loading?",
                    answer: "The <code>&lt;Script&gt;</code> component lets you manage third-party scripts. It supports strategies like <code>lazyOnload</code> (loading during idle time) or <code>worker</code> (offloading script execution to web workers) to keep pages interactive.",
                    level: "Beginner"
                },
                {
                    id: "next-q38",
                    question: "How does next/dynamic support lazy loading?",
                    answer: "<code>next/dynamic</code> is a wrapper around dynamic imports. It lets you lazy-load React components, downloading their JavaScript bundles only when they are rendered on the screen to speed up initial page loads.",
                    level: "Intermediate"
                },
                {
                    id: "next-q39",
                    question: "How do you access search query parameters in the App Router?",
                    answer: "In Server Components, search query parameters are accessible via the <code>searchParams</code> prop passed to page layouts. In Client Components, you use the <code>useSearchParams()</code> hook to access query parameters.",
                    level: "Beginner"
                },
                {
                    id: "next-q40",
                    question: "What is Partial Rendering in the App Router?",
                    answer: "Partial rendering means that when navigating between sibling routes (e.g., <code>/dashboard/analytics</code> to <code>/dashboard/settings</code>), Next.js only re-renders the layout views that changed, keeping shared parent layouts intact to optimize performance.",
                    level: "Advanced"
                },
                {
                    id: "next-q41",
                    question: "How do you handle cookies inside Server Components?",
                    answer: "You can read cookies inside Server Components using the <code>cookies()</code> function from <code>next/headers</code>. However, because Server Components are read-only during rendering, you can write or delete cookies only inside Server Actions or Route Handlers.",
                    level: "Intermediate"
                },
                {
                    id: "next-q42",
                    question: "What is the useSelectedLayoutSegment hook used for?",
                    answer: "<code>useSelectedLayoutSegment</code> is a Client Component hook that lets you read the active route segment one level below the layout where it is called. This is useful for building dynamic sidebar navigation menus or active tab styling.",
                    level: "Advanced"
                },
                {
                    id: "next-q43",
                    question: "How do you configure the matcher option in Middleware?",
                    answer: "The exported <code>config</code> object inside a <code>middleware.js</code> file defines a <code>matcher</code> array. This lets you specify exact paths or regex patterns to filter which incoming requests trigger the middleware script, optimizing performance.",
                    level: "Intermediate"
                },
                {
                    id: "next-q44",
                    question: "What is the Edge Runtime in Next.js?",
                    answer: "The Edge Runtime is a lightweight runtime built on V8 engines instead of Node.js. It features ultra-low startup latency and is ideal for running middleware, personalization scripts, and API routes close to the user's location.",
                    level: "Advanced"
                },
                {
                    id: "next-q45",
                    question: "How do you generate sitemaps dynamically in Next.js?",
                    answer: "You can generate sitemaps dynamically by creating a <code>sitemap.js</code> or <code>sitemap.ts</code> file in the root of the <code>app/</code> directory. Next.js executes this file, gets dynamic page URLs, and outputs a standard, formatted <code>sitemap.xml</code> file.",
                    level: "Advanced"
                }
            ]
        },
        {
            id: "angular",
            title: "Angular Interview",
            icon: "fa-brands fa-angular",
            description: "Study components, RxJS Observables, Dependency Injection, standalone modules, and lifecycle tracking.",
            color: "from-rose-600 to-red-500",
            questions: [
                {
                    id: "angular-q1",
                    question: "What is Angular and what are its key features?",
                    answer: "Angular is a component-based development platform built on TypeScript. Key features include:\n\n- Two-way data binding.\n- Built-in dependency injection.\n- Powerful template syntax and directive capabilities.\n- A robust routing system.\n- RxJS support for handling asynchronous data flows and event management.",
                    level: "Beginner"
                },
                {
                    id: "angular-q2",
                    question: "Describe core Angular Component Lifecycle Hooks.",
                    answer: "Key component lifecycle hooks include:\n\n- <code>ngOnChanges()</code>: Fires when input property values change.\n- <code>ngOnInit()</code>: Runs after inputs are initialized. Used for initial data fetching.\n- <code>ngDoCheck()</code>: Custom change detection hook.\n- <code>ngAfterViewInit()</code>: Invoked after the component’s views are fully initialized.\n- <code>ngOnDestroy()</code>: Used to clean up resources and unsubscribe from Observables before the component is destroyed.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q3",
                    question: "What are Directives and the different types in Angular?",
                    answer: "Directives add custom behaviors or modify DOM elements in templates. There are three types:\n\n1. <b>Component Directives:</b> Directives with templates that form the basis of the UI.\n2. <b>Structural Directives:</b> Change the DOM layout by adding, removing, or replacing elements (e.g., <code>*ngIf</code>, <code>*ngFor</code>).\n3. <b>Attribute Directives:</b> Modify the appearance or behavior of an existing DOM element (e.g., <code>ngStyle</code>, <code>ngClass</code>).",
                    level: "Beginner"
                },
                {
                    id: "angular-q4",
                    question: "How does Two-Way Data Binding work in Angular?",
                    answer: "Two-way data binding synchronizes state changes between the TypeScript component code and its template view automatically. It uses banana-in-a-box syntax <code>[(ngModel)]</code>, combining property binding <code>[]</code> (component-to-view) and event binding <code>()</code> (view-to-component).",
                    level: "Beginner"
                },
                {
                    id: "angular-q5",
                    question: "Explain Dependency Injection in Angular.",
                    answer: "Dependency Injection (DI) is a design pattern where a class requests dependencies (like services) from an external injector rather than creating them manually. Angular uses custom decorators (like <code>@Injectable()</code>) to declare service classes that can be automatically instantiated and shared across your components.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q6",
                    question: "Compare Observables and Promises.",
                    answer: "<ul><li><b>Promises:</b> Handle a single asynchronous event and execute immediately when created. They cannot be canceled.</li><li><b>Observables:</b> Provided by RxJS. They can emit multiple values over time, run lazily (only when subscribed to), support cancellation, and can be transformed using operators like <code>map()</code> and <code>filter()</code>.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "angular-q7",
                    question: "Compare Reactive Forms and Template-driven Forms.",
                    answer: "<ul><li><b>Reactive Forms:</b> Model-driven forms defined in TypeScript. They are highly testable, offer direct control over validation, and provide real-time value tracking through RxJS Observables.</li><li><b>Template-driven Forms:</b> Simple forms defined inside templates using directives like <code>ngModel</code>. They are easy to set up but can be harder to test and scale for complex validation logic.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "angular-q8",
                    question: "What is the difference between Pure and Impure Pipes?",
                    answer: "<ul><li><b>Pure Pipes:</b> Execute only when Angular detects a change to its primitive input values (like string or number) or object references. They are highly performant because execution is cached.</li><li><b>Impure Pipes:</b> Executed on every change detection cycle, regardless of whether inputs have changed. This can degrade performance if they run complex calculations.</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "angular-q9",
                    question: "What are Standalone Components in modern Angular?",
                    answer: "Standalone Components (introduced in Angular 14) remove the need for standard <code>@NgModule</code> organization. By setting <code>standalone: true</code> in their decorator, components can manage their own imports directly, simplifying setup and reducing boilerplate code.",
                    level: "Beginner"
                },
                {
                    id: "angular-q10",
                    question: "What are Route Guards and what are the main types?",
                    answer: "Route Guards determine if a user can navigate to or away from a route. The main guard interfaces are:\n\n- <code>CanActivate</code>: Controls access to a route (e.g., checking if a user is logged in).\n- <code>CanActivateChild</code>: Controls access to nested child routes.\n- <code>CanDeactivate</code>: Checks if a user can leave a route (e.g., warning them about unsaved form changes).\n- <code>Resolve</code>: Fetches required route data before rendering the page.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q11",
                    question: "Compare JIT and AOT compilation.",
                    answer: "<ul><li><b>JIT (Just-In-Time) Compilation:</b> Compiles templates into JavaScript at runtime inside the browser. Used for rapid local development.</li><li><b>AOT (Ahead-Of-Time) Compilation:</b> Compiles templates into optimized JavaScript during the build process. This reduces bundle sizes, speeds up page loads, and flags template errors before code is deployed.</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "angular-q12",
                    question: "Explain the OnPush Change Detection strategy.",
                    answer: "By default, Angular checks components for updates on every application event. Switching to <code>ChangeDetectionStrategy.OnPush</code> limits these checks to when input properties change, an event is fired from the component template, or an observable emitting inside the component triggers update checks manually, improving performance.",
                    level: "Advanced"
                },
                {
                    id: "angular-q13",
                    question: "How does Lazy Loading work in Angular Routing?",
                    answer: "Lazy loading loads route-specific components or bundles only when a user visits that route, reducing the initial bundle size. In modern Angular, you define this using the <code>loadComponent</code> or <code>loadChildren</code> properties inside your routing configuration:\n<pre>{ path: 'admin', loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent) }</pre>",
                    level: "Intermediate"
                },
                {
                    id: "angular-q14",
                    question: "What are HTTP Interceptors used for?",
                    answer: "HTTP Interceptors intercept and modify outgoing HTTP requests and incoming responses globally. They are commonly used to automatically add authentication tokens to request headers, handle global API errors, or display loading indicators during request cycles.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q15",
                    question: "Explain the difference between ViewChild and ContentChild.",
                    answer: "<ul><li><b>ViewChild:</b> Accesses a element, component, or directive defined inside the component's own template.</li><li><b>ContentChild:</b> Accesses an element or component projected into the component using content projection slots (<code>&lt;ng-content&gt;</code>).</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "angular-q16",
                    question: "What is RxJS and why is it used in Angular?",
                    answer: "RxJS is a reactive programming library for composing asynchronous and event-based programs using observable sequences. Angular integrates RxJS natively to handle features like HTTP requests, routing changes, and form input monitoring.",
                    level: "Beginner"
                },
                {
                    id: "angular-q17",
                    question: "What is the Async Pipe and why should you use it?",
                    answer: "The <code>async</code> pipe is used in HTML templates to subscribe to an Observable or Promise directly. It automatically outputs the latest emitted value and unsubscribes when the component is destroyed, preventing memory leaks.",
                    level: "Beginner"
                },
                {
                    id: "angular-q18",
                    question: "What are NgModules in Angular?",
                    answer: "An <code>@NgModule</code> is a decorator class that groups closely related components, directives, pipes, and services into cohesive units of code, declaring their internal imports, exports, and providers.",
                    level: "Beginner"
                },
                {
                    id: "angular-q19",
                    question: "Compare Subject and BehaviorSubject in RxJS.",
                    answer: "<ul><li><b>Subject:</b> A multi-cast observable that does not store any state. Subscribing components will only receive values emitted after they subscribe.</li><li><b>BehaviorSubject:</b> Requires an initial value and stores the current state. Subscribing components immediately receive the last emitted value upon subscription.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "angular-q20",
                    question: "What is the purpose of the Renderer2 service?",
                    answer: "<code>Renderer2</code> is an abstraction service used to safely manipulate DOM elements. It intercepts native element changes, ensuring your application remains compatible with environments where direct browser DOM access is unavailable (e.g., SSR or web workers).",
                    level: "Advanced"
                },
                {
                    id: "angular-q21",
                    question: "How do you create a Custom Attribute Directive?",
                    answer: "You create a custom attribute directive using the <code>@Directive</code> decorator. It injects <code>ElementRef</code> and <code>Renderer2</code> to safely intercept and change behaviors or styles of elements (e.g., creating a hover highlighting effect).",
                    level: "Intermediate"
                },
                {
                    id: "angular-q22",
                    question: "How does Dynamic Component Loading function?",
                    answer: "Dynamic component loading lets you load components at runtime. You use a <code>ViewContainerRef</code> query pointer and invoke its <code>createComponent()</code> method to instantiate and render a component dynamically based on conditions.",
                    level: "Advanced"
                },
                {
                    id: "angular-q23",
                    question: "What is Content Projection in Angular?",
                    answer: "Content Projection is a pattern that lets you insert custom HTML content into a component template from parent templates. This is handled using the <code>&lt;ng-content&gt;</code> element, which acts as a customizable slot.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q24",
                    question: "Compare component constructors and ngOnInit.",
                    answer: "<ul><li><b>Constructor:</b> A default JS class method used for dependency injection. Inputs and DOM elements are not yet initialized during construction.</li><li><b>ngOnInit:</b> An Angular lifecycle hook called after inputs are populated, making it the ideal place to start initial data fetching.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "angular-q25",
                    question: "What is Zone.js and how does it relate to change detection?",
                    answer: "<code>Zone.js</code> is a library that intercepts asynchronous browser operations (like timeouts, AJAX, or user clicks) in Angular. It alerts the framework whenever an async event completes, automatically triggering change detection to update the template view.",
                    level: "Advanced"
                },
                {
                    id: "angular-q26",
                    question: "How do you use the takeUntil operator to unsubscribe?",
                    answer: "The <code>takeUntil</code> pattern involves defining a Subject (e.g., <code>destroy$</code>) that emits in <code>ngOnDestroy</code>. By chaining <code>pipe(takeUntil(this.destroy$))</code> on your observables, they automatically unsubscribe when the component is destroyed.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q27",
                    question: "Compare @HostListener and @HostBinding.",
                    answer: "<ul><li><b>@HostListener:</b> Listens for events triggered on the component's host DOM element to run callback methods.</li><li><b>@HostBinding:</b> Binds a host element property (like a class or style) to a component state variable, updating the host element dynamically.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "angular-q28",
                    question: "What are Template Reference Variables in Angular?",
                    answer: "A template reference variable (declared using the <code>#</code> symbol, like <code>#myInput</code>) provides a reference to a DOM element or component instance, letting you access its properties directly inside the template markup.",
                    level: "Beginner"
                },
                {
                    id: "angular-q29",
                    question: "How do you ensure an Angular Service is a Singleton?",
                    answer: "To ensure a service acts as a single, shared instance (singleton), specify <code>providedIn: 'root'</code> inside the <code>@Injectable()</code> decorator, which registers the service instance at the root-level injector.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q30",
                    question: "What is the purpose of an InjectionToken?",
                    answer: "An <code>InjectionToken</code> is used to register and inject dependencies that don't have runtime class types (like raw configuration objects, strings, or interfaces) into your components using the <code>@Inject()</code> decorator.",
                    level: "Advanced"
                },
                {
                    id: "angular-q31",
                    question: "What are Angular Signals?",
                    answer: "Introduced in Angular 16, Signals are a reactive state tracking system. A Signal is a value wrapper that notifies the framework whenever its value changes, which allows granular change detection without needing Zone.js tracking.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q32",
                    question: "Compare flatMap/mergeMap, switchMap, concatMap, and exhaustMap.",
                    answer: "<ul><li><b>mergeMap:</b> Executes inner requests in parallel as they arrive.</li><li><b>switchMap:</b> Cancels active requests and switches to new ones when inputs update.</li><li><b>concatMap:</b> Queues requests to run one after another.</li><li><b>exhaustMap:</b> Ignores incoming inputs while a current request is running.</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "angular-q33",
                    question: "What is the Angular CLI and what are its core commands?",
                    answer: "The Angular CLI is a command-line interface tool used to initialize, develop, test, and build applications. Core commands include <code>ng new</code> (create app), <code>ng serve</code> (start server), <code>ng generate</code> (scaffold assets), and <code>ng build</code> (compile project).",
                    level: "Beginner"
                },
                {
                    id: "angular-q34",
                    question: "Explain modern client-side Hydration in Angular SSR.",
                    answer: "Introduced in Angular 16+, non-destructive hydration reuses the server-rendered DOM on the client. Instead of clearing and re-rendering HTML, Angular attaches event listeners directly to the existing DOM structure, reducing layouts shifts.",
                    level: "Advanced"
                },
                {
                    id: "angular-q35",
                    question: "What is viewProviders in Angular components?",
                    answer: "The <code>viewProviders</code> option inside the component decorator registers dependency providers that are accessible only to the component's own template elements, keeping them hidden from projected child elements (<code>&lt;ng-content&gt;</code>).",
                    level: "Advanced"
                },
                {
                    id: "angular-q36",
                    question: "How do you build a Custom Pipe?",
                    answer: "You build a custom pipe using the <code>@Pipe</code> decorator and implementing the <code>PipeTransform</code> interface. You define its behaviors inside the <code>transform(value, ...args)</code> method, returning formatted results in templates.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q37",
                    question: "How do you handle global runtime errors in Angular?",
                    answer: "You handle global errors by implementing the custom <code>ErrorHandler</code> interface. By overriding its <code>handleError(error)</code> method and registering it in providers, you can catch and log all unhandled runtime errors globally.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q38",
                    question: "How does Angular prevent Cross-Site Scripting (XSS)?",
                    answer: "By default, Angular treats template values as untrusted and sanitizes them before rendering them in the DOM. To explicitly trust safe HTML or resource paths, you can bypass this security using the <code>DomSanitizer</code> service.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q39",
                    question: "How do you write Unit Tests in Angular?",
                    answer: "Angular uses Jasmine to define test suites (using <code>describe</code>, <code>it</code>, and <code>expect</code>) and Karma to execute them in browser environments. You use the <code>TestBed</code> helper class to configure the testing module and compile components.",
                    level: "Beginner"
                },
                {
                    id: "angular-q40",
                    question: "What is the NgOptimizedImage directive?",
                    answer: "The <code>NgOptimizedImage</code> directive (using the <code>rawSrc</code> attribute) implements image performance optimizations. It automatically generates sizes, sets lazy loading, and warns about layout shifts.",
                    level: "Beginner"
                },
                {
                    id: "angular-q41",
                    question: "Explain the @defer block in Angular 17+.",
                    answer: "The <code>@defer</code> block is a template syntax feature for lazy-loading components. It lets you defer loading specific component bundles until conditions are met (e.g., <code>@defer (on viewport)</code> or <code>@defer (on hover)</code>).",
                    level: "Advanced"
                },
                {
                    id: "angular-q42",
                    question: "What is the FormBuilder utility in Angular?",
                    answer: "<code>FormBuilder</code> is a helper service that simplifies creating complex Reactive Forms. It reduces the boilerplate code required to instantiate <code>FormGroup</code>, <code>FormControl</code>, and <code>FormArray</code> structures.",
                    level: "Beginner"
                },
                {
                    id: "angular-q43",
                    question: "What is the purpose of the ChangeDetectorRef service?",
                    answer: "<code>ChangeDetectorRef</code> lets you control change detection manually. It provides methods like <code>detectChanges()</code> (trigger checks), <code>detach()</code> (disable checks), and <code>reattach()</code> (enable checks) to optimize rendering in complex setups.",
                    level: "Intermediate"
                },
                {
                    id: "angular-q44",
                    question: "What are Micro-Frontends in Angular and how are they built?",
                    answer: "Micro-frontends allow large Angular applications to be split into independent modules built by separate teams. They are commonly implemented using module federation to dynamically load remote entry bundles at runtime.",
                    level: "Advanced"
                },
                {
                    id: "angular-q45",
                    question: "What are Router Resolvers and when should they be used?",
                    answer: "A resolver is a data fetching guard that implements the <code>Resolve</code> interface. It fetches data before a route navigates, ensuring that the component displays fully loaded data immediately on render.",
                    level: "Intermediate"
                }
            ]
        },
        {
            id: "php",
            title: "PHP Interview",
            icon: "fa-brands fa-php",
            description: "Review OOP PHP, PDO database connectors, Composer packages, namespaces, and security principles.",
            color: "from-indigo-600 to-purple-500",
            questions: [
                {
                    id: "php-q1",
                    question: "What is PHP and how does it function on a web server?",
                    answer: "PHP (Hypertext Preprocessor) is an open-source, server-side scripting language. When a user requests a PHP file, the web server (such as Apache or Nginx) passes the file to the PHP engine. The engine processes the code, generates plain HTML, and sends it back to the browser.",
                    level: "Beginner"
                },
                {
                    id: "php-q2",
                    question: "Compare the echo and print statements.",
                    answer: "<ul><li><b>echo:</b> Can take multiple arguments, has no return value, and executes slightly faster.</li><li><b>print:</b> Can only take a single argument, returns a value of <code>1</code> (making it usable inside expressions).</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "php-q3",
                    question: "What is the difference between GET and POST requests?",
                    answer: "<ul><li><b>GET:</b> Appends parameters to the URL. Visible in browser history, has strict length limits, and should only be used to retrieve non-sensitive data.</li><li><b>POST:</b> Sends data inside the HTTP request body. Securely handles sensitive data, has no strict length limits, and is used to create or update resources.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "php-q4",
                    question: "Compare Sessions and Cookies.",
                    answer: "<ul><li><b>Sessions:</b> Store user data securely on the web server. A unique session ID is stored in the browser cookie to map requests to the correct user.</li><li><b>Cookies:</b> Store data directly inside the user's browser as small text files. They have storage limits and can be modified or disabled by the user.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "php-q5",
                    question: "What are Traits in PHP?",
                    answer: "Traits are a mechanism for reusing code across independent classes, bypassing PHP's single inheritance limitation. They allow a class to inherit methods from multiple traits without needing a multi-tier class inheritance tree:\n<pre>trait Logger {\n  public function log($msg) { echo $msg; }\n}\nclass UserService {\n  use Logger;\n}</pre>",
                    level: "Intermediate"
                },
                {
                    id: "php-q6",
                    question: "Compare PDO and MySQLi.",
                    answer: "<ul><li><b>PDO (PHP Data Objects):</b> An abstraction layer that lets you write database-agnostic code, allowing you to connect to multiple SQL database engines. It supports prepared statements for secure queries.</li><li><b>MySQLi:</b> A MySQL-specific database connector. It provides both procedural and object-oriented interfaces but cannot connect to other database engines.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "php-q7",
                    question: "What is Composer and why is it used?",
                    answer: "Composer is the standard dependency manager for PHP. It tracks package dependencies defined in your project's <code>composer.json</code> file, manages package installations, and generates autoloading files for third-party libraries.",
                    level: "Beginner"
                },
                {
                    id: "php-q8",
                    question: "What are Namespaces in PHP?",
                    answer: "Namespaces group classes, interfaces, and functions under a distinct folder-like path. This prevents naming collisions between classes with the same name in different libraries or within your application.",
                    level: "Intermediate"
                },
                {
                    id: "php-q9",
                    question: "How do you protect PHP applications from SQL Injection?",
                    answer: "You can protect applications from SQL injection by using <b>prepared statements</b> with parameterized queries (using libraries like PDO or MySQLi). This separates SQL query logic from variables, preventing malicious input from altering query statements:\n<pre>$stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email');\n$stmt->execute(['email' => $email]);</pre>",
                    level: "Intermediate"
                },
                {
                    id: "php-q10",
                    question: "Compare Interfaces and Abstract Classes in PHP.",
                    answer: "<ul><li><b>Interfaces:</b> Define code contracts. They cannot contain instance variables or method implementations; classes must implement all declared methods.</li><li><b>Abstract Classes:</b> Classes that cannot be instantiated directly. They can define both abstract methods (without implementations) and regular methods (with implementations) and declare state variables.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "php-q11",
                    question: "What are Magic Methods in PHP?",
                    answer: "Magic methods are special methods triggered by specific actions in PHP. They start with a double underscore (<code>__</code>). Key magic methods include:\n\n- <code>__construct()</code>: Called when an object is instantiated.\n- <code>__get()</code> and <code>__set()</code>: Triggered when accessing or writing undefined object properties.\n- <code>__toString()</code>: Triggered when converting an object into a string.",
                    level: "Advanced"
                },
                {
                    id: "php-q12",
                    question: "Explain modern exception handling in PHP.",
                    answer: "Errors are handled using try, catch, and finally blocks. If an error occurs inside a <code>try</code> block, an Exception object is thrown and caught by a matching <code>catch</code> block. The optional <code>finally</code> block executes cleanup code afterward.",
                    level: "Beginner"
                },
                {
                    id: "php-q13",
                    question: "How does PSR-4 Autoloading work?",
                    answer: "PSR-4 is an autoloading standard where class namespaces map directly to file paths. This removes the need to manually write <code>require()</code> or <code>include()</code> statements across your files. Composer automatically reads these mappings to register autoload mappings.",
                    level: "Advanced"
                },
                {
                    id: "php-q14",
                    question: "How does Garbage Collection function in PHP?",
                    answer: "PHP manages memory using a reference-counting mechanism. When an object's reference count reaches zero, its memory is freed. PHP also uses a cycle collector to detect and clean up circular references (where two objects reference each other but are no longer connected to active code), preventing memory leaks.",
                    level: "Advanced"
                },
                {
                    id: "php-q15",
                    question: "How do you build a secure RESTful API in PHP?",
                    answer: "To build a secure RESTful API in PHP:\n\n- Accept and parse standard JSON requests.\n- Enforce secure HTTPS connections.\n- Verify API tokens or authenticate sessions on every request.\n- Validate and sanitize input parameters.\n- Set appropriate HTTP status codes (such as <code>200 OK</code> or <code>400 Bad Request</code>) in responses.",
                    level: "Advanced"
                },
                {
                    id: "php-q16",
                    question: "What are Superglobals in PHP?",
                    answer: "Superglobals are built-in, globally scoped arrays available in all scopes throughout a PHP script (e.g., <code>$_GET</code>, <code>$_POST</code>, <code>$_SERVER</code>, <code>$_SESSION</code>, and <code>$_COOKIE</code>).",
                    level: "Beginner"
                },
                {
                    id: "php-q17",
                    question: "Compare the require and include statements.",
                    answer: "<ul><li><b>include:</b> If the file is missing, it raises a warning (<code>E_WARNING</code>) but continues executing the script.</li><li><b>require:</b> If the file is missing, it raises a fatal error (<code>E_COMPILE_ERROR</code>) and stops execution immediately.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "php-q18",
                    question: "Compare require and require_once.",
                    answer: "<code>require</code> imports the target file every time it is called. <code>require_once</code> checks if the target file has already been loaded and skips reloading if it has, preventing duplicate class definition errors.",
                    level: "Beginner"
                },
                {
                    id: "php-q19",
                    question: "What is the Null Coalescing Operator in PHP?",
                    answer: "The null coalescing operator (<code>??</code>) returns its first operand if it exists and is not null. Otherwise, it returns the second operand (e.g., <code>$username = $_GET['user'] ?? 'anonymous';</code>).",
                    level: "Beginner"
                },
                {
                    id: "php-q20",
                    question: "What is Type Hinting and strict types in PHP?",
                    answer: "Type hinting enforces data types for function parameters, return values, and class properties. By default, PHP coerces invalid types; declaring <code>declare(strict_types=1);</code> at the top of a file enforces strict type matching.",
                    level: "Intermediate"
                },
                {
                    id: "php-q21",
                    question: "Compare array_merge() and the + operator for arrays.",
                    answer: "<ul><li><b>array_merge():</b> Merges arrays, overwriting matching string keys with later values but appending numeric keys.</li><li><b>+ Operator:</b> Unions arrays, keeping keys from the first array and ignoring conflicting keys from subsequent arrays.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "php-q22",
                    question: "What is Session Fixation and how do you prevent it in PHP?",
                    answer: "Session Fixation is an exploit where an attacker forces a victim to use a known session ID. It is prevented by calling <code>session_regenerate_id(true)</code> on user login to generate a fresh, secure session ID.",
                    level: "Intermediate"
                },
                {
                    id: "php-q23",
                    question: "What is the yield keyword and PHP Generators?",
                    answer: "The <code>yield</code> keyword is used inside generator functions. It allows you to loop through large datasets sequentially without loading the entire collection into memory, which reduces memory footprint.",
                    level: "Advanced"
                },
                {
                    id: "php-q24",
                    question: "What are Anonymous Classes in PHP?",
                    answer: "Anonymous classes are simple classes created on demand without a name. They are defined using the <code>new class</code> syntax, making them ideal for writing lightweight mocks or throwaway objects in tests.",
                    level: "Intermediate"
                },
                {
                    id: "php-q25",
                    question: "How does OPcache speed up PHP execution?",
                    answer: "OPcache parses and compiles PHP scripts into intermediate bytecode once, saving this bytecode directly in shared memory. This eliminates the need for PHP to compile scripts on every incoming HTTP request.",
                    level: "Advanced"
                },
                {
                    id: "php-q26",
                    question: "Compare the self and $this keywords.",
                    answer: "<ul><li><b>$this:</b> Refers to the current instantiated object, allowing access to instance properties and methods using the pointer (<code>-&gt;</code>).</li><li><b>self:</b> Refers to the current class namespace, allowing access to static members and constants using the scope operator (<code>::</code>).</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "php-q27",
                    question: "Compare parent:: and self:: in PHP.",
                    answer: "<ul><li><b>self::</b> Resolves to the current class where the code is written.</li><li><b>parent::</b> Resolves to the parent class of the current class, allowing access to overridden parent methods.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "php-q28",
                    question: "Explain Late Static Binding (static::) in PHP.",
                    answer: "By default, <code>self::</code> resolves to the class where the method was defined. Late Static Binding uses the <code>static::</code> keyword to evaluate class scope at runtime based on the inheriting class instance.",
                    level: "Advanced"
                },
                {
                    id: "php-q29",
                    question: "What are PHP Fibers?",
                    answer: "Introduced in PHP 8.1, Fibers are lightweight concurrency units (coroutines). They allow you to pause and resume code blocks, which makes it easier to write asynchronous, non-blocking code.",
                    level: "Advanced"
                },
                {
                    id: "php-q30",
                    question: "What is CSRF and how do you prevent it in PHP?",
                    answer: "Cross-Site Request Forgery (CSRF) is an attack where an attacker tricks a logged-in user into making unwanted requests. It is prevented by generating a unique token (CSRF token), storing it in the user's session, and validating it on POST requests.",
                    level: "Intermediate"
                },
                {
                    id: "php-q31",
                    question: "What is XSS and how do you prevent it in PHP?",
                    answer: "Cross-Site Scripting (XSS) occurs when malicious JavaScript is injected into user inputs and rendered in the browser. It is prevented by sanitizing inputs and escaping output values using functions like <code>htmlspecialchars()</code>.",
                    level: "Beginner"
                },
                {
                    id: "php-q32",
                    question: "Explain Anonymous Functions (Closures) in PHP.",
                    answer: "Anonymous functions (or closures) are functions defined without a name. They can capture variables from the parent scope using the <code>use</code> keyword: <code>function() use ($var) { ... }</code>.",
                    level: "Intermediate"
                },
                {
                    id: "php-q33",
                    question: "How do you securely hash passwords in modern PHP?",
                    answer: "You should hash passwords using <code>password_hash()</code>, which automatically handles secure salt generation. To verify passwords during login, use the <code>password_verify()</code> function.",
                    level: "Beginner"
                },
                {
                    id: "php-q34",
                    question: "What is the declare(strict_types=1) directive?",
                    answer: "Declaring <code>strict_types=1</code> at the very top of a PHP file enforces strict type checks. If a method expects an integer but is passed a string, PHP raises a fatal <code>TypeError</code> instead of coercing it.",
                    level: "Beginner"
                },
                {
                    id: "php-q35",
                    question: "What are Attributes in PHP 8?",
                    answer: "Attributes (introduced in PHP 8) are structured metadata comments that can be added to classes, methods, or properties. They replace old PHPDoc comments and can be accessed at runtime using Reflection APIs.",
                    level: "Advanced"
                },
                {
                    id: "php-q36",
                    question: "Explain Constructor Property Promotion in PHP 8.",
                    answer: "Constructor Property Promotion allows you to declare and initialize class properties directly in the constructor signature using visibility modifiers, reducing boilerplates:\n<pre>public function __construct(public string $name) {}</pre>",
                    level: "Beginner"
                },
                {
                    id: "php-q37",
                    question: "Compare match expressions and switch statements in PHP 8.",
                    answer: "<ul><li><b>switch:</b> Performs loose equality checks (<code>==</code>) and requires manual <code>break</code> statements to prevent fallthrough.</li><li><b>match:</b> Performs strict type checks (<code>===</code>), returns a value directly, and does not require break statements.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "php-q38",
                    question: "What is the Nullsafe Operator in PHP 8?",
                    answer: "The nullsafe operator (<code>?-&gt;</code>) lets you chain method or property calls. If any element in the chain resolves to null, the execution stops and returns null instead of throwing a fatal error: <code>$country = $user?-&gt;getAddress()?-&gt;country;</code>.",
                    level: "Beginner"
                },
                {
                    id: "php-q39",
                    question: "How does Dependency Injection work in PHP frameworks?",
                    answer: "Dependency Injection (DI) is a pattern where class dependencies are passed in from the outside (typically through constructors). Frameworks use DI Containers (like Laravel's Service Container) to instantiate and inject services automatically.",
                    level: "Intermediate"
                },
                {
                    id: "php-q40",
                    question: "What are PHP Standard Recommendations (PSR)?",
                    answer: "PSRs are coding standards defined by the PHP FIG group. Key PSRs include <b>PSR-1</b> (basic coding standards), <b>PSR-12</b> (extended coding style guide), and <b>PSR-4</b> (autoloading standard).",
                    level: "Intermediate"
                },
                {
                    id: "php-q41",
                    question: "How do you protect PHP sessions from Session Hijacking?",
                    answer: "You can protect sessions by using secure, encrypted cookies (setting <code>session.cookie_secure</code> and <code>session.cookie_httponly</code> options) and validating the user's IP or User-Agent string during session checks.",
                    level: "Intermediate"
                },
                {
                    id: "php-q42",
                    question: "Compare serialization and JSON encoding in PHP.",
                    answer: "<ul><li><b>serialize():</b> Converts PHP structures (including objects with their methods and states) into a byte stream.</li><li><b>json_encode():</b> Converts data into standard JSON strings, which is ideal for API communication.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "php-q43",
                    question: "What is the Repository Pattern in PHP?",
                    answer: "The Repository Pattern acts as an abstraction layer between database logic and application controllers. It isolates database query logic inside dedicated classes, making controllers more readable and easier to test.",
                    level: "Advanced"
                },
                {
                    id: "php-q44",
                    question: "What is PHP-FPM and how does it function?",
                    answer: "PHP-FPM (FastCGI Process Manager) is an alternative FastCGI implementation for PHP. It runs a master process that manages a pool of worker processes to handle incoming PHP script execution requests from a web server.",
                    level: "Advanced"
                },
                {
                    id: "php-q45",
                    question: "What are WeakMaps in PHP 8?",
                    answer: "A <code>WeakMap</code> is a collection where keys are object references. Unlike standard arrays, if the object used as a key has no other references left, it is garbage collected, which prevents memory leaks in daemon scripts.",
                    level: "Advanced"
                }
            ]
        },
        {
            id: "aws",
            title: "AWS Interview",
            icon: "fa-brands fa-aws",
            description: "Explore core cloud infrastructure: EC2, VPC setups, IAM policies, Lambda serverless, and cloud databases.",
            color: "from-orange-500 to-amber-500",
            questions: [
                {
                    id: "aws-q1",
                    question: "What is AWS and what are its core services?",
                    answer: "AWS (Amazon Web Services) is a comprehensive cloud computing platform. Core services include:\n\n- <b>Compute:</b> EC2, ECS, Lambda.\n- <b>Storage:</b> S3, EBS, Glacier.\n- <b>Database:</b> RDS, DynamoDB, Redshift.\n- <b>Networking:</b> VPC, Route 53, CloudFront.\n- <b>Security:</b> IAM, Secrets Manager.",
                    level: "Beginner"
                },
                {
                    id: "aws-q2",
                    question: "Compare EC2, ECS, and Lambda.",
                    answer: "<ul><li><b>EC2 (Elastic Compute Cloud):</b> Virtual machines that give you full OS-level control and require manual configuration.</li><li><b>ECS (Elastic Container Service):</b> A managed container orchestration service for running Docker container clusters in production.</li><li><b>Lambda:</b> A serverless compute service that executes code in response to events, charging you only for the exact milliseconds your code runs.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "aws-q3",
                    question: "Explain the differences between S3 Storage Classes.",
                    answer: "Amazon S3 offers different storage tiers based on access patterns:\n\n- <b>S3 Standard:</b> High redundancy and low latency for frequently accessed data.\n- <b>S3 Standard-IA:</b> For infrequently accessed data that needs to be available quickly when requested.\n- <b>S3 Glacier:</b> Cheap archival storage with retrieval times ranging from minutes to hours.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q4",
                    question: "What is an AWS VPC and what are its key components?",
                    answer: "A VPC (Virtual Private Cloud) is a logically isolated virtual network where you launch AWS resources. Key components include:\n\n- <b>Subnets:</b> Public (connected to internet gateways) or Private (isolated).\n- <b>Internet Gateway (IGW):</b> Connects public subnets to the internet.\n- <b>Route Tables:</b> Direct network traffic paths.\n- <b>NAT Gateway:</b> Allows resources in private subnets to securely connect to the internet without exposing them to incoming connections.",
                    level: "Advanced"
                },
                {
                    id: "aws-q5",
                    question: "What is the difference between IAM Users, Roles, and Policies?",
                    answer: "<ul><li><b>Policies:</b> JSON documents that define resource permissions.</li><li><b>Users:</b> Human users or services that need persistent credentials to log in or access AWS.</li><li><b>Roles:</b> Temporary credentials assumed by trusted entities (like EC2 instances or Lambda functions) to perform specific tasks.</li></ul>",
                    level: "Beginner"
                },
                {
                    id: "aws-q6",
                    question: "What is Amazon CloudFront?",
                    answer: "CloudFront is AWS's global Content Delivery Network (CDN). It caches static and dynamic web content at edge locations worldwide, reducing latency and speeding up page load times for global users.",
                    level: "Beginner"
                },
                {
                    id: "aws-q7",
                    question: "Compare Amazon RDS and DynamoDB.",
                    answer: "<ul><li><b>RDS (Relational Database Service):</b> A managed SQL service for relational databases (like MySQL or PostgreSQL). Ideal for applications requiring ACID compliance and complex queries.</li><li><b>DynamoDB:</b> A fully managed NoSQL database that offers single-digit millisecond performance and automatic scaling. Ideal for key-value datasets.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "aws-q8",
                    question: "Describe different types of Elastic Load Balancers (ELB).",
                    answer: "AWS offers three main load balancer types:\n\n- <b>Application Load Balancer (ALB):</b> Operates at the Application Layer (Layer 7). Routes HTTP/HTTPS traffic based on request headers, paths, or query parameters.\n- <b>Network Load Balancer (NLB):</b> Operates at the Transport Layer (Layer 4). Designed to handle millions of low-latency, high-throughput TCP/UDP connections.\n- <b>Classic Load Balancer (CLB):</b> A legacy load balancer deprecated for modern cloud architectures.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q9",
                    question: "How do Auto Scaling Groups work?",
                    answer: "Auto Scaling Groups (ASG) monitor your application's resource demands. They dynamically spin up or terminate EC2 instances based on scaling policies (such as average CPU utilization), ensuring high availability and cost efficiency.",
                    level: "Beginner"
                },
                {
                    id: "aws-q10",
                    question: "Describe Route 53 routing policies.",
                    answer: "Key DNS routing policies in Amazon Route 53 include:\n\n- <b>Simple Routing:</b> Map domain requests directly to a single resource.\n- <b>Weighted Routing:</b> Distribute traffic across resources based on specified percentages.\n- <b>Latency Routing:</b> Route users to the AWS region that provides the fastest response times.\n- <b>Failover Routing:</b> Redirect traffic to backup servers if primary instances fail.",
                    level: "Advanced"
                },
                {
                    id: "aws-q11",
                    question: "What is Amazon API Gateway?",
                    answer: "API Gateway is a managed service that makes it easy for developers to create, publish, and secure APIs at scale. It acts as a single entry point, routing requests to backend services like AWS Lambda or private EC2 servers.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q12",
                    question: "Compare CloudWatch and CloudTrail.",
                    answer: "<ul><li><b>CloudWatch:</b> Monitors performance, logs, and system metrics to ensure your application runs smoothly.</li><li><b>CloudTrail:</b> Audits and logs API activity, tracking who made changes to your AWS resources for compliance and security audits.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "aws-q13",
                    question: "Compare Amazon SNS and SQS.",
                    answer: "<ul><li><b>SNS (Simple Notification Service):</b> A pub/sub messaging service that broadcasts notifications to multiple subscribers simultaneously.</li><li><b>SQS (Simple Queue Service):</b> A message queue service that stores tasks until consumers process and delete them, decoupling server components.</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "aws-q14",
                    question: "What are the pillars of the AWS Well-Architected Framework?",
                    answer: "The six pillars of the AWS Well-Architected Framework are:\n\n1. Operational Excellence\n2. Security\n3. Reliability\n4. Performance Efficiency\n5. Cost Optimization\n6. Sustainability",
                    level: "Advanced"
                },
                {
                    id: "aws-q15",
                    question: "Compare Secrets Manager and Parameter Store.",
                    answer: "<ul><li><b>Secrets Manager:</b> A secure secrets store that automatically rotates database passwords and API keys, charging a monthly fee per secret.</li><li><b>Parameter Store:</b> A free service for storing application configuration parameters and strings, though it does not support automatic secrets rotation.</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "aws-q16",
                    question: "What is AWS CloudFormation?",
                    answer: "CloudFormation is an Infrastructure as Code (IaC) service. It lets you define your AWS resources in JSON or YAML templates, allowing you to deploy and manage infrastructure automatically, consistently, and repeatedly.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q17",
                    question: "What is AWS IAM Role Assumption?",
                    answer: "IAM Role Assumption is a process where trusted entities (like users, accounts, or services) call the Security Token Service (STS) to request temporary security credentials. This avoids using long-lived access keys and improves security.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q18",
                    question: "Explain Lambda Cold Starts and how to mitigate them.",
                    answer: "A cold start happens when a Lambda function runs after being idle, forcing AWS to launch a new execution environment. This can be mitigated by writing lightweight deployment packages, increasing memory allocation, or configuring Provisioned Concurrency.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q19",
                    question: "Compare S3 Bucket Policies and IAM Policies.",
                    answer: "<ul><li><b>IAM Policies:</b> Attached to users, groups, or roles, defining what actions that specific identity can perform across different AWS resources.</li><li><b>S3 Bucket Policies:</b> Attached directly to an S3 bucket, defining access rights for users or external accounts to that specific bucket.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "aws-q20",
                    question: "What is the EC2 Instance Metadata Service (IMDS)?",
                    answer: "IMDS is an on-instance HTTP endpoint (accessible locally at <code>169.254.169.254</code>) that provides configuration data about the running EC2 instance. The modern IMDSv2 uses session-oriented tokens to protect against SSRF vulnerabilities.",
                    level: "Advanced"
                },
                {
                    id: "aws-q21",
                    question: "What are AWS Lambda Layers?",
                    answer: "Lambda Layers allow you to package and share common libraries, dependency archives, or custom runtimes across multiple Lambda functions, reducing deployment zip file sizes and separating business logic from libraries.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q22",
                    question: "Compare Security Groups and Network Access Control Lists (NACLs).",
                    answer: "<ul><li><b>Security Groups:</b> Stateful firewalls applied at the instance level. They allow only allow-rules, automatically permit return traffic, and evaluate all rules.</li><li><b>NACLs:</b> Stateless firewalls applied at the subnet level. They support both allow and deny rules, require explicit return traffic paths, and process rules sequentially by number.</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "aws-q23",
                    question: "What is VPC Peering?",
                    answer: "VPC Peering is a networking connection that allows you to route traffic between two Virtual Private Clouds (VPCs) securely using private IP addresses, as if they were part of the same network, without routing traffic over the public internet.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q24",
                    question: "What is AWS KMS and how does it secure data?",
                    answer: "AWS KMS (Key Management Service) is a managed service used to create, control, and rotate cryptographic keys. It integrates with other AWS services to encrypt data at rest, using a Master Key to decrypt temporary Data Keys on demand.",
                    level: "Beginner"
                },
                {
                    id: "aws-q25",
                    question: "What are S3 Pre-signed URLs?",
                    answer: "An S3 Pre-signed URL grants temporary download or upload permissions to a private bucket object. It uses the creator's security credentials and includes a custom expiration limit, letting unauthorized users interact with specific files securely.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q26",
                    question: "What is AWS ElastiCache and what engines does it support?",
                    answer: "ElastiCache is a managed in-memory cache service. It supports popular open-source caching engines: <b>Redis</b> (for complex data structures and persistence) and <b>Memcached</b> (for simple key-value lookups).",
                    level: "Beginner"
                },
                {
                    id: "aws-q27",
                    question: "What is Amazon Athena?",
                    answer: "Amazon Athena is a serverless query service. It lets you write standard SQL queries to analyze raw data stored directly in Amazon S3 buckets, charging you only for the gigabytes of data scanned during each query.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q28",
                    question: "Explain AWS Transit Gateway.",
                    answer: "Transit Gateway acts as a centralized cloud router. It connects multiple VPCs, on-premises networks, and VPN connections together, eliminating the need to build complex hub-and-spoke mesh peering networks as infrastructure scales.",
                    level: "Advanced"
                },
                {
                    id: "aws-q29",
                    question: "How do Amazon Route 53 Health Checks function?",
                    answer: "Route 53 Health Checks monitor endpoint health by making periodic HTTP, HTTPS, or TCP requests. If an endpoint becomes unresponsive, Route 53 automatically updates DNS records to route users to healthy backup servers.",
                    level: "Beginner"
                },
                {
                    id: "aws-q30",
                    question: "What are the benefits of AWS Systems Manager (SSM) Session Manager?",
                    answer: "Session Manager provides secure shell access to EC2 instances without needing SSH keys or bastion hosts. It routes access through secure HTTPS connections via the SSM Agent, logging every session command in CloudTrail for compliance auditing.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q31",
                    question: "What is the IAM Policy Simulator?",
                    answer: "The IAM Policy Simulator is a testing tool. It lets you simulate and verify authorization decisions for IAM policies, ensuring that permission configurations allow or block specific API actions before they are deployed.",
                    level: "Beginner"
                },
                {
                    id: "aws-q32",
                    question: "Compare SQS Standard Queues and SQS FIFO Queues.",
                    answer: "<ul><li><b>Standard Queues:</b> Unlimited throughput with at-least-once message delivery, though messages might occasionally arrive out of order.</li><li><b>FIFO (First-In-First-Out) Queues:</b> Guarantee exact ordering and exactly-once delivery, though throughput is limited up to 3,000 messages per second.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "aws-q33",
                    question: "What are AWS CloudFront Invalidations?",
                    answer: "Invalidations allow you to remove files from the CloudFront global edge cache before their standard Time-to-Live (TTL) expiration has completed, forcing Edge locations to fetch the newest file versions on subsequent requests.",
                    level: "Beginner"
                },
                {
                    id: "aws-q34",
                    question: "Compare AWS Elastic Beanstalk and AWS CloudFormation.",
                    answer: "<ul><li><b>Elastic Beanstalk:</b> A Platform-as-a-Service (PaaS) that lets you upload code and handles capacity, load balancing, and scaling automatically.</li><li><b>CloudFormation:</b> An Infrastructure-as-a-Code (IaC) tool that requires manual YAML definition of individual AWS resources, offering finer control.</li></ul>",
                    level: "Intermediate"
                },
                {
                    id: "aws-q35",
                    question: "What is S3 Object Lock?",
                    answer: "S3 Object Lock enforces a WORM (Write Once, Read Many) protection model on files. It prevents files from being deleted or overwritten during a specified retention window, which is ideal for meeting strict compliance regulations.",
                    level: "Advanced"
                },
                {
                    id: "aws-q36",
                    question: "What is Amazon Aurora and how does it scale?",
                    answer: "Amazon Aurora is a fully managed, MySQL- and PostgreSQL-compatible relational database built for the cloud. It features a distributed, self-healing storage system that automatically replicates data across multiple availability zones and scales storage capacity on demand.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q37",
                    question: "Explain the AWS Shared Responsibility Model.",
                    answer: "The model defines safety divisions:\n- <b>Security of the Cloud:</b> Managed by AWS (underlying physical servers, global infrastructure, virtualization layer).\n- <b>Security in the Cloud:</b> Managed by the Customer (operating system configuration, firewall settings, user credentials, and data encryption).",
                    level: "Beginner"
                },
                {
                    id: "aws-q38",
                    question: "What is AWS Step Functions?",
                    answer: "Step Functions is a serverless orchestrator. It lets you combine multiple AWS services (such as Lambda, ECS task runs, or SQS queues) into structured visual state machines, managing complex execution steps, retries, and errors automatically.",
                    level: "Advanced"
                },
                {
                    id: "aws-q39",
                    question: "What is Aurora Serverless and when should you use it?",
                    answer: "Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales database computing capacity based on application demand, making it ideal for variable or unpredictable workloads.",
                    level: "Advanced"
                },
                {
                    id: "aws-q40",
                    question: "What is AWS WAF?",
                    answer: "AWS WAF (Web Application Firewall) helps protect web applications from common web exploits. It lets you define customizable web security rules to block common exploits (like SQL Injection or Cross-Site Scripting) at the cloud perimeter.",
                    level: "Beginner"
                },
                {
                    id: "aws-q41",
                    question: "What is S3 Versioning and MFA Delete?",
                    answer: "S3 Versioning keeps multiple historical versions of an object in the same bucket. Enabling Multi-Factor Authentication (MFA) Delete adds an extra layer of security, requiring a physical token code before any permanent version deletions can take place.",
                    level: "Advanced"
                },
                {
                    id: "aws-q42",
                    question: "What are DynamoDB Global Tables?",
                    answer: "DynamoDB Global Tables are fully managed, multi-region database tables. They automatically replicate data updates across selected AWS regions, providing single-digit millisecond latency read and write speeds to users globally.",
                    level: "Advanced"
                },
                {
                    id: "aws-q43",
                    question: "What is Amazon Redshift?",
                    answer: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service. It uses Columnar Storage and Massively Parallel Processing (MPP) architectures to run complex analytics queries against massive datasets.",
                    level: "Intermediate"
                },
                {
                    id: "aws-q44",
                    question: "Compare Gateway VPC Endpoints and Interface VPC Endpoints.",
                    answer: "<ul><li><b>Gateway Endpoints:</b> Free routing targets added to route tables. They route traffic privately only to Amazon S3 and DynamoDB.</li><li><b>Interface Endpoints:</b> Cost-per-hour endpoints powered by PrivateLink. They attach a private IP address (Elastic Network Interface) to route traffic to almost any AWS service.</li></ul>",
                    level: "Advanced"
                },
                {
                    id: "aws-q45",
                    question: "What is AWS Organizations and Service Control Policies (SCPs)?",
                    answer: "AWS Organizations manages multiple AWS accounts in a single place. Service Control Policies (SCPs) are root-level permissions that define maximum authorization boundaries for member accounts, overriding local IAM administrators.",
                    level: "Advanced"
                }
            ]
        }
    ],
    hrQuestions: [
        {
            id: "hr-q1",
            question: "Tell me about yourself.",
            answer: "Focus your response on the <b>Present-Past-Future</b> framework. Briefly highlight your current role and key accomplishments, explain how you got there by discussing previous relevant experience, and conclude by explaining why you are excited about this opportunity and why you are a great fit."
        },
        {
            id: "hr-q2",
            question: "How do you handle conflict or disagreements with teammates?",
            answer: "Describe a past conflict using the <b>STAR method</b>. Explain how you listened to the other person's perspective, stayed objective, focused on technical facts over personal opinions, and collaborated to find a compromise that kept the project on track."
        },
        {
            id: "hr-q3",
            question: "Where do you see yourself in 5 years?",
            answer: "Explain how you want to grow technically, take on more design responsibilities, or step into a leadership role. Focus on how this position aligns with your career path, showing the company that you are committed to growing with them long-term."
        },
        {
            id: "hr-q4",
            question: "Describe your experience when a project deployment failed or ran late.",
            answer: "Admit that challenges happen. Explain how you communicated with stakeholders, identified the root cause of the delay, and stayed calm under pressure to deploy a fix, highlighting what you learned to prevent similar issues."
        },
        {
            id: "hr-q5",
            question: "Why should we hire you over other candidates?",
            answer: "Highlight your unique combination of technical skills, teamwork, and problem-solving abilities. Connect your past achievements to the company's current challenges to show how you can deliver value from day one."
        }
    ],
    tips: [
        {
            title: "Use the STAR Technique",
            desc: "When answering behavioral questions, structure your response around <b>Situation</b>, <b>Task</b>, <b>Action</b>, and <b>Result</b>. This keeps your answers concise and focused on results.",
            icon: "fa-solid fa-star text-amber-500"
        },
        {
            title: "Think Out Loud in Coding Rounds",
            desc: "Interviewers care about your process, not just your code. Talk through your ideas, evaluate different tradeoffs, and ask clarifying questions before you write your first line of code.",
            icon: "fa-solid fa-brain text-purple-500"
        },
        {
            title: "Ask Smart, Thoughtful Questions",
            desc: "At the end of the interview, ask about engineering standards, technical debt, or team culture. This shows that you are genuinely interested in the role and already thinking like a team member.",
            icon: "fa-solid fa-comments text-indigo-500"
        }
    ]
};