--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: medication; Type: TABLE; Schema: public; Owner: tpl1122_18
--

CREATE TABLE public.medication (
    medication_id integer NOT NULL,
    user_id integer NOT NULL,
    medication_name character varying(255) NOT NULL,
    dosage numeric,
    monday boolean,
    tuesday boolean,
    wednesday boolean,
    thursday boolean,
    friday boolean,
    saturday boolean,
    sunday boolean
);


ALTER TABLE public.medication OWNER TO tpl1122_18;

--
-- Name: medication_medication_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1122_18
--

CREATE SEQUENCE public.medication_medication_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.medication_medication_id_seq OWNER TO tpl1122_18;

--
-- Name: medication_medication_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1122_18
--

ALTER SEQUENCE public.medication_medication_id_seq OWNED BY public.medication.medication_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl1122_18
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    image character varying(255)
);


ALTER TABLE public.users OWNER TO tpl1122_18;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1122_18
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO tpl1122_18;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1122_18
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: medication medication_id; Type: DEFAULT; Schema: public; Owner: tpl1122_18
--

ALTER TABLE ONLY public.medication ALTER COLUMN medication_id SET DEFAULT nextval('public.medication_medication_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: tpl1122_18
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: medication; Type: TABLE DATA; Schema: public; Owner: tpl1122_18
--

COPY public.medication (medication_id, user_id, medication_name, dosage, monday, tuesday, wednesday, thursday, friday, saturday, sunday) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl1122_18
--

COPY public.users (user_id, username, email, image) FROM stdin;
\.


--
-- Name: medication_medication_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_18
--

SELECT pg_catalog.setval('public.medication_medication_id_seq', 1, false);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_18
--

SELECT pg_catalog.setval('public.users_user_id_seq', 1, false);


--
-- Name: medication medication_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1122_18
--

ALTER TABLE ONLY public.medication
    ADD CONSTRAINT medication_pkey PRIMARY KEY (medication_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1122_18
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: medication medication_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl1122_18
--

ALTER TABLE ONLY public.medication
    ADD CONSTRAINT medication_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

