<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Liste des utilisateurs
 * @ApiResource()
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="`user`")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * Email de l'utilisateur
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * Prénom de l'utilisateur
     * @ORM\Column(type="string", length=255)
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $first_name;

    /**
     * Nom de l'utilisateur
     * @ORM\Column(type="string", length=255)
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $last_name;

    /**
     * Téléphone de l'utilisateur
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"GetOneMentor"})
     */
    private $phone;

    /**
     * Lien du profil github de l'utilisateur
     * @ORM\Column(type="string", length=255)
     * @Groups({"GetOneMentor"})
     */
    private $github;

    /**
     * Lien du profil linkedin de l'utilisateur
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"GetOneMentor"})
     */
    private $linkedin;

    /**
     * Lien du portfolio de l'utilisateur
     * @ORM\Column(type="string", length=512, nullable=true)
     * @Groups({"GetOneMentor"})
     */
    private $portfolio;

    /**
     * Texte biographique de l'utilisateur
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $bio;

    /**
     * Lien de l'image de l'utilisateur
     * @ORM\Column(type="string", length=512, nullable=true)
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $avatar;

    /**
     * Texte décrivant le parcours de l'utilisateur
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"GetOneMentor"})
     */
    private $route;

    /**
     * Ouverture au reseaux sociaux (bool)
     * @ORM\Column(type="boolean")
     * @Groups({"GetOneMentor"})
     */
    private $open_social;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"GetOneMentor"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToOne(targetEntity=Mentor::class, inversedBy="userId", cascade={"persist", "remove"})
     */
    private $mentor;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $job;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->first_name;
    }

    public function setFirstName(string $first_name): self
    {
        $this->first_name = $first_name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->last_name;
    }

    public function setLastName(string $last_name): self
    {
        $this->last_name = $last_name;

        return $this;
    }

    public function getPhone(): ?int
    {
        return $this->phone;
    }

    public function setPhone(?int $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getGithub(): ?string
    {
        return $this->github;
    }

    public function setGithub(string $github): self
    {
        $this->github = $github;

        return $this;
    }

    public function getLinkedin(): ?string
    {
        return $this->linkedin;
    }

    public function setLinkedin(?string $linkedin): self
    {
        $this->linkedin = $linkedin;

        return $this;
    }

    public function getPortfolio(): ?string
    {
        return $this->portfolio;
    }

    public function setPortfolio(?string $portfolio): self
    {
        $this->portfolio = $portfolio;

        return $this;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): self
    {
        $this->bio = $bio;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getRoute(): ?string
    {
        return $this->route;
    }

    public function setRoute(?string $route): self
    {
        $this->route = $route;

        return $this;
    }

    public function getOpenSocial(): ?bool
    {
        return $this->open_social;
    }

    public function setOpenSocial(bool $open_social): self
    {
        $this->open_social = $open_social;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getMentor(): ?Mentor
    {
        return $this->mentor;
    }

    public function setMentor(?Mentor $mentor): self
    {
        $this->mentor = $mentor;

        return $this;
    }

    public function getJob(): ?string
    {
        return $this->job;
    }

    public function setJob(?string $job): self
    {
        $this->job = $job;

        return $this;
    }
}
